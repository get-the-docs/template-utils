package net.videki.templateutils.api.document.api.mapper;

import java.util.ArrayList;

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

import java.util.List;
import java.util.Locale;
import java.util.Map;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper
public interface TemplateElementEntityToApiModelMapper {

	TemplateElementEntityToApiModelMapper INSTANCE = Mappers.getMapper(TemplateElementEntityToApiModelMapper.class);

	default net.videki.templateutils.api.document.api.model.TemplateElement entityToApiModel(
			net.videki.templateutils.template.core.documentstructure.descriptors.TemplateElement source) {

			if (source != null) {
				final net.videki.templateutils.api.document.api.model.TemplateElement target = new net.videki.templateutils.api.document.api.model.TemplateElement();

				if (source.getTemplateElementId() != null) {
					target.setTemplateElementId(source.getTemplateElementId().getId());
				}
				target.setTemplateNames(TemplateElementEntityToApiModelMapper.INSTANCE.mapTemplateNames(source.getTemplateNames()));
				if (source.getFormat() != null) {
					target.setInputFormat(net.videki.templateutils.api.document.api.model.TemplateElement.InputFormatEnum.valueOf(source.getFormat().name()));
				}
				target.setDefaultLocale(map(source.getDefaultLocale()));
				target.setCount(source.getCount());

				return target;
			} else {
				return null;
			}
	}

	List<net.videki.templateutils.api.document.api.model.TemplateElement> entityListToApiModelList(
			List<net.videki.templateutils.template.core.documentstructure.descriptors.TemplateElement> source);

	default List<net.videki.templateutils.api.document.api.model.TemplateNameItem> mapTemplateNames(Map<Locale,String> value) {

			final List<net.videki.templateutils.api.document.api.model.TemplateNameItem> results = new ArrayList<>(value.keySet().size());

			if (value != null) {
				for (final Locale actValue : value.keySet()) {
					final net.videki.templateutils.api.document.api.model.TemplateNameItem actItem = new net.videki.templateutils.api.document.api.model.TemplateNameItem();
					actItem.setLocale(map(actValue));
					actItem.setTemplateName(value.get(actValue));

					results.add(actItem);
				}
			}

			return results;

	}

	default String map(Locale value) {
		return value.toString();
	}
	
}
