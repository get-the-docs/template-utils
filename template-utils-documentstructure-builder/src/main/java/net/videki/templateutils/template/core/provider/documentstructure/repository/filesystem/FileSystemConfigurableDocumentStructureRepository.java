package net.videki.templateutils.template.core.provider.documentstructure.repository.filesystem;

/*-
 * #%L
 * template-utils-documentstructure-builder
 * %%
 * Copyright (C) 2021 Levente Ban
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * #L%
 */

import net.videki.templateutils.template.core.documentstructure.DocumentStructureOptions;
import net.videki.templateutils.template.core.provider.documentstructure.builder.DocumentStructureOptionsBuilder;
import net.videki.templateutils.template.core.provider.documentstructure.builder.yaml.YmlConfigurableDocStructureBuilder;
import net.videki.templateutils.template.core.provider.documentstructure.repository.ConfigurableDocumentStructureRepository;
import net.videki.templateutils.template.core.service.exception.TemplateProcessException;
import net.videki.templateutils.template.core.service.exception.TemplateServiceConfigurationException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.lang.reflect.InvocationTargetException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Properties;

public class FileSystemConfigurableDocumentStructureRepository extends FileSystemDocumentStructureRepository
        implements ConfigurableDocumentStructureRepository {
    private static final String DOCUMENT_STRUCTURE_PROVIDER_BASEDIR =
            "repository.documentstructure.provider.filesystem.basedir";
    private static final String DOCUMENT_STRUCTURE_BUILDER = "repository.documentstructure.builder";

    private static final Logger LOGGER = LoggerFactory.getLogger(FileSystemConfigurableDocumentStructureRepository.class);

    private DocumentStructureOptionsBuilder documentStructureBuilder;
    private String basedir;

    @Override
    public void init(final Properties props) throws TemplateServiceConfigurationException {
        super.init(props);

        if (props == null) {
            throw new TemplateServiceConfigurationException("f883e70a-a314-4156-84d7-789f20529ed4",
                    "Null or invalid template properties caught.");
        }

        this.basedir = (String) props.get(DOCUMENT_STRUCTURE_PROVIDER_BASEDIR);
        this.documentStructureBuilder = loadDocumentStructureBuilder(props);
    }

    @Override
    public DocumentStructureOptions getDocumentStructureOptions(final String documentStructureFile)
            throws TemplateServiceConfigurationException {
        final Path pathToFile = Paths.get(this.basedir + File.separator + documentStructureFile).toAbsolutePath();

        InputStream dsAsStream;
        try {
            dsAsStream = pathToFile.toUri().toURL().openStream();
        } catch (final IOException e) {
            dsAsStream = null;
        }

        if (dsAsStream == null) {
            final String msg = String.format("DocumentStructure not found. File: %s. ", pathToFile);
            LOGGER.warn(msg);

            throw new TemplateProcessException("06629ccd-b748-4dcb-ac26-8c7cd17ca121", msg);
        } else {
            LOGGER.debug("DocumentStructure found. File: {}. ", pathToFile);

            return this.documentStructureBuilder.buildOptions(dsAsStream);
        }
    }

    private DocumentStructureOptionsBuilder loadDocumentStructureBuilder(final Properties props) {
        DocumentStructureOptionsBuilder documentStructureBuilder = new YmlConfigurableDocStructureBuilder();

        String repositoryProvider = "<Not configured or could not read properties file>";
        try {
            repositoryProvider = (String) props.get(DOCUMENT_STRUCTURE_BUILDER);

            if (repositoryProvider != null) {
                documentStructureBuilder = (DocumentStructureOptionsBuilder)
                        this.getClass().getClassLoader()
                                .loadClass(repositoryProvider)
                                .getDeclaredConstructor()
                                .newInstance();
            } else {
                final String msg = "Document structure builder not specified, " +
                        "using built-in YmlDocStructureBuilder.";
                LOGGER.info(msg);
            }
        } catch (InstantiationException | IllegalAccessException | ClassNotFoundException |
                NoSuchMethodException | InvocationTargetException e) {
            final String msg = String.format("Error loading document structure builder: %s, " +
                    "using built-in YmlConfigurableDocStructureBuilder.", repositoryProvider);
            LOGGER.error(msg, e);
        }

        return documentStructureBuilder;
    }
}
