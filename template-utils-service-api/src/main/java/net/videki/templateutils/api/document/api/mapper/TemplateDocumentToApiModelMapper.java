package net.videki.templateutils.api.document.api.mapper;

/*-
 * #%L
 * template-utils-service-api
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

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.stream.Collectors;

import net.videki.templateutils.api.document.api.model.GetTemplatesResponse;
import net.videki.templateutils.api.document.api.model.Page;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper
public interface TemplateDocumentToApiModelMapper {

	TemplateDocumentToApiModelMapper INSTANCE = Mappers.getMapper(TemplateDocumentToApiModelMapper.class);

	public static final String DELIMITER = "|";

	@Mapping(source = "templateName", target = "templateName")
	@Mapping(source = "format", target = "format")
	@Mapping(source = "locale", target = "locale")
	@Mapping(source = "version", target = "version")
	@Mapping(source = "internalKey", target = "internalKey")
	net.videki.templateutils.api.document.api.model.TemplateDocument entityToApiModel(net.videki.templateutils.template.core.template.descriptors.TemplateDocument source);

	List<net.videki.templateutils.api.document.api.model.TemplateDocument> entityListToApiModelList(List<net.videki.templateutils.template.core.template.descriptors.TemplateDocument> source);

	default GetTemplatesResponse pageToApiModel(net.videki.templateutils.template.core.provider.persistence.Page<net.videki.templateutils.template.core.template.descriptors.TemplateDocument> source) {

		final GetTemplatesResponse result = new GetTemplatesResponse();
		final Page page = new Page();
		page.setTotalPages(source.getTotalPages());
		page.totalElements(source.getTotalElements());
		page.setNumber(source.getNumber());
		page.setSize(source.getSize());
		page.setNumberOfElements(source.getNumberOfElements());
		result.setPage(page);

		result.setContents(new ArrayList<net.videki.templateutils.api.document.api.model.TemplateDocument>(source.getData().stream().map(INSTANCE::entityToApiModel).collect(Collectors.toList())));

		return result;
	}

	default String map(Locale value) {
		return value.toString();
	}

}

