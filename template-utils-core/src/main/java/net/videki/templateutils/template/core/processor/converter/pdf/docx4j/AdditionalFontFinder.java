package net.videki.templateutils.template.core.processor.converter.pdf.docx4j;

import net.videki.templateutils.template.core.configuration.FontConfig;
import net.videki.templateutils.template.core.service.exception.TemplateServiceConfigurationException;
import org.apache.commons.lang3.StringUtils;
import org.docx4j.fonts.PhysicalFonts;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.Iterator;
import java.util.List;

import static net.videki.templateutils.template.core.service.exception.TemplateServiceConfigurationException.MSG_INVALID_PARAMETERS;

/**
 * Helper class for the pdf converter to register custom, non-default fonts to embedded in the pdf document.
 * @author Levente Ban
 */
public class AdditionalFontFinder {

    /**
     * Logger.
     */
    private static final Logger LOGGER = LoggerFactory.getLogger(DocxToPdfConverter.class);

    /**
     * Parses the specified font directory for the font mappings provided in the parameters.
     * @param fontConfigList the font mappings specified in the configuration (see template-utils.properties).
     * @throws TemplateServiceConfigurationException thrown if the font urls or the mapping is invalid.
     */
    public static void discoverFonts(final List<FontConfig> fontConfigList) throws TemplateServiceConfigurationException {
        if (fontConfigList == null) {
            throw new TemplateServiceConfigurationException("037e44ac-3dcf-4344-8989-31cf3fcfc624",
                    String.format("%s - font config null.", MSG_INVALID_PARAMETERS) );
        }

        for (Iterator<FontConfig> iter = fontConfigList.iterator(); iter.hasNext(); ) {
            try {
                final String baseDir = iter.next().getBasedir();
                if (StringUtils.isNotEmpty(baseDir)) {
                    PhysicalFonts.addPhysicalFont(new URL(baseDir));
                } else {
                    throw new TemplateServiceConfigurationException("656dca28-bc61-4059-991f-7bb65ec916e6",
                            String.format("%s - invalid font config url.", MSG_INVALID_PARAMETERS) );
                }
            } catch (final MalformedURLException e) {
                throw new TemplateServiceConfigurationException("656dca28-bc61-4059-991f-7bb65ec916e6",
                        String.format("%s - invalid font config url.", MSG_INVALID_PARAMETERS) );

            } catch (final Exception e) {
                LOGGER.warn("Error initializing template-utils config based additional fonts", e);
            }
        }
    }

}
