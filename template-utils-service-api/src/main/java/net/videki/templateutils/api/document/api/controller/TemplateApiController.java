package net.videki.templateutils.api.document.api.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import net.videki.templateutils.api.document.service.TemplateApiService;
import net.videki.templateutils.api.document.api.mapper.PageableMapper;
import net.videki.templateutils.api.document.api.mapper.TemplateDocumentToApiModelMapper;
import net.videki.templateutils.api.document.api.model.GetTemplatesResponse;
import net.videki.templateutils.api.document.api.model.Pageable;
import net.videki.templateutils.api.document.api.model.TemplateDocument;
import net.videki.templateutils.api.document.api.model.TemplateJobApiResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.context.request.NativeWebRequest;

import javax.validation.Valid;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.util.*;

@RequiredArgsConstructor
@Slf4j
@Controller
@RequestMapping("${app.api.base-path:/api/v1}")
public class TemplateApiController implements TemplateApi {

    private final NativeWebRequest request;

    private final TemplateApiService templateApiService;

    @Override
    public Optional<NativeWebRequest> getRequest() {
        return Optional.ofNullable(request);
    }

    @Override
    public ResponseEntity<GetTemplatesResponse> getTemplates(final @Valid Pageable pageable) {

        try {
            if (pageable != null) {
                log.info("getTemplates - Querying template list page {}.", pageable);
            } else {
                log.info("Querying full template list.");
            }

            final GetTemplatesResponse result = TemplateDocumentToApiModelMapper.INSTANCE
                    .pageToApiModel(templateApiService.getTemplates(PageableMapper.INSTANCE.map(pageable)));

            if (log.isDebugEnabled()) {
                log.debug("getTemplates - result: [{}]", result);
            }
            return ResponseEntity.ok(result);
        } catch (final Exception e) {
            log.error("Error querying template list.", e);

            return ResponseEntity.badRequest().build();
        }
    }

}
