package net.videki.templateutils.documentstructure.builder.core.service;

import net.videki.templateutils.documentstructure.builder.core.documentstructure.DocumentStructureOptions;
import net.videki.templateutils.template.core.documentstructure.DocumentStructure;
import net.videki.templateutils.template.core.service.exception.TemplateServiceConfigurationException;

public interface DocumentStructureOptionsBuilder {
    DocumentStructureOptions buildOptions(String dsConfig) throws TemplateServiceConfigurationException;
}
