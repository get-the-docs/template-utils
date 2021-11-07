package net.videki.templateutils.template.core.context;

import com.jayway.jsonpath.Configuration;
import com.jayway.jsonpath.DocumentContext;
import com.jayway.jsonpath.JsonPath;
import lombok.extern.slf4j.Slf4j;
import net.minidev.json.JSONValue;
import net.videki.templateutils.template.core.context.dto.JsonValueObject;
import net.videki.templateutils.template.core.service.exception.TemplateServiceRuntimeException;

import java.io.IOException;
import java.io.StringWriter;
import java.util.List;
import java.util.Map;

/**
 * JSON template model provider implementation to provide non-reflection based model data.
 * You can initialize the actual model context with a JSON string, then query JSONpath based values or value lists of it. 
 * Usage: Use the class methods in the placeholder parameters of the model value getters in the document processors.
 * 
 * @author Levente Ban
 */
@Slf4j
public class JsonTemplateContext extends TemplateContext {

    /**
     * JSON path query prefix.
     */
    private static final String JSONPATH_PREFIX = "$.";

    /**
     * Document context from the caught JSON.
     */
    private final transient DocumentContext dc;

    /**
     * The actual json data as plain string.
     */
    private final String jsonData;

    /**
     * Initializes an empty context object.
     */
    public JsonTemplateContext() {
        this.jsonData = null;
        this.dc = null;
    }

    /**
     * Initializes the context with a JSON as string.
     * @param data the JSON data as a string.
     * @throws TemplateServiceRuntimeException on parse errors.
     */
    public JsonTemplateContext(final String data) {
        this.jsonData = data;

        try {
            log.trace("Parsing context data...");

            this.dc = JsonPath.using(Configuration.defaultConfiguration()).parse(data);

            Map<String, Object> contextObjects = dc.read("$." + TemplateContext.CONTEXT_ROOT_KEY);

            contextObjects.keySet()
                    .forEach(t -> {
                        final StringWriter sw = new StringWriter();
                        try {
                            JSONValue.writeJSONString(contextObjects.get(t), sw);
                        } catch (final IOException e) {
                            throw new TemplateServiceRuntimeException("Error parsing data");
                        }
                        addValueObject(t, new JsonValueObject(sw.toString()));
                    });

            log.trace("Context parse successful");
        } catch (final Exception e) {
            final var msg = "Error reading JSON data";

            log.error(msg);
            if (log.isDebugEnabled()) {
                log.debug("Value object to parse: {}", data);
            }

            throw new TemplateServiceRuntimeException(msg);
        }
    }

    /**
     * Returns a single value based on the JSON path caught.
     * @param path the JSONpath to be evaluated.
     * @return the context object if found by the given JSON path.
     */
    public Object getValue(final String path) {
        if (log.isTraceEnabled()) {
            log.trace("Getting data for path {}...", path);
        }
        return this.dc.read(JSONPATH_PREFIX + path);
    }

    /**
     * Returns a list of values based on the JSON path caught.
     * @param path the JSONpath to be evaluated.
     * @return the list of context object if found by the given JSON path.
     */
    public List<Object> getItems(final String path) {
        if (log.isTraceEnabled()) {
            log.trace("Getting items for path {}...", path);
        }
        return this.dc.read(JSONPATH_PREFIX + path);
    }

    /**
     * Template placeholder convenience mehod to return a single context object based on the caught path. 
     * @param path the JSON path on the actual model.
     * @return the result context object if found.
     */
    public Object jsonpath(final String path) {
        return getValue(path);
    }

    /**
     * Template placeholder convenience mehod to return a single context object based on the caught path. 
     * @param path the JSON path on the actual model.
     * @return the result context object if found.
     */
    public Object jp(final String path) {
        return getValue(path);
    }

    /**
     * Template placeholder convenience mehod to return a list of context object based on the caught path. 
     * @param path the JSON path on the actual model.
     * @return the result list of context objects if found.
     */
    public List<Object> items(final String path) {
        return getItems(path);
    }

    /**
     * Returns the original JSON string to build the context.
     * @return the JSON string.
     */
    public String getData() {
        return this.jsonData;
    }


    /**
     * Returns the original JSON string to build the context.
     * @return the JSON string.
     */
    @Override
    public String toJson() {
        return this.jsonData;
    }
}
