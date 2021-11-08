package net.videki.templateutils.template.core.processor.input.noop;

import net.videki.templateutils.template.core.processor.AbstractTemplateProcessor;
import net.videki.templateutils.template.core.processor.input.InputTemplateProcessor;
import net.videki.templateutils.template.core.service.InputFormat;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Identity template processor.
 * It produces a result document from the input template without changes.
 * @author Levente Ban
 */
public class NoopTemplateProcessor extends AbstractTemplateProcessor implements InputTemplateProcessor {

    /**
     * Logger.
     */
    private static final Logger LOGGER = LoggerFactory.getLogger(NoopTemplateProcessor.class);

    /**
     * Returns the input format.
     * @return the input format.
     */
    @Override
    public InputFormat getInputFormat() {
        return null;
    }

    /**
     * Entry point to "process" the template. 
     * @param templateFileName the template name in the template repository.
     * @param dto the model object. (is omitted)
     * @return the result document stream.
     */
    @Override
    public <T> OutputStream fill(String templateFileName, T dto) {
    
        try (final InputStream is = getTemplate(templateFileName);
            final ByteArrayOutputStream targetStream = new ByteArrayOutputStream()) {
        
            is.transferTo(targetStream);

            return targetStream;
        } catch(final IOException e) {
            LOGGER.error("Error creating result stream", e);
            
            return null;
        }
    }
}
