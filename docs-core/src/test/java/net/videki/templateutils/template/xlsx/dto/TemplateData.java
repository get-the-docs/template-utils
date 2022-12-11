package net.videki.documentengine.xlsx.dto;

/*-
 * #%L
 * docs-core
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
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class TemplateData {
  private Map<String, String> data;

  public TemplateData() {
    this.data = new HashMap<>();
  }

  public Map<String, String> getData() {
    return data;
  }

  public List<String> getDetails() {
    List<String> result = new ArrayList<>(this.data.size());
    result.addAll(this.data.values());

    return result;

  }

}
