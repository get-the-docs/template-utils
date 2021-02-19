package net.videki.templateutils.service.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import org.openapitools.jackson.nullable.JsonNullable;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * DocStructureJobApiResponse
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2021-02-16T18:11:50.335294800+01:00[Europe/Prague]")

public class DocStructureJobApiResponse   {
  @JsonProperty("transactionId")
  private String transactionId;

  @JsonProperty("message")
  private String message;

  public DocStructureJobApiResponse transactionId(String transactionId) {
    this.transactionId = transactionId;
    return this;
  }

  /**
   * Get transactionId
   * @return transactionId
  */
  @ApiModelProperty(value = "")

@Pattern(regexp="^[a-zA-Z0-9_/-]*$") @Size(min=0,max=4000) 
  public String getTransactionId() {
    return transactionId;
  }

  public void setTransactionId(String transactionId) {
    this.transactionId = transactionId;
  }

  public DocStructureJobApiResponse message(String message) {
    this.message = message;
    return this;
  }

  /**
   * Get message
   * @return message
  */
  @ApiModelProperty(value = "")

@Pattern(regexp="^[a-zA-Z0-9_/\\]*$") @Size(min=0,max=4000) 
  public String getMessage() {
    return message;
  }

  public void setMessage(String message) {
    this.message = message;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    DocStructureJobApiResponse docStructureJobApiResponse = (DocStructureJobApiResponse) o;
    return Objects.equals(this.transactionId, docStructureJobApiResponse.transactionId) &&
        Objects.equals(this.message, docStructureJobApiResponse.message);
  }

  @Override
  public int hashCode() {
    return Objects.hash(transactionId, message);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class DocStructureJobApiResponse {\n");
    
    sb.append("    transactionId: ").append(toIndentedString(transactionId)).append("\n");
    sb.append("    message: ").append(toIndentedString(message)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
}

