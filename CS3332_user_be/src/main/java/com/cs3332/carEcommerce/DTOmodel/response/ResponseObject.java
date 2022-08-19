package com.cs3332.carEcommerce.DTOmodel.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResponseObject {

    private String status;
    private String message;
    private Object data;

    @Override
    public String toString() {
        return "ResponseObject{" +
                "status='" + status + '\'' +
                ", massage='" + message + '\'' +
                ", data=" + data +
                '}';
    }
}
