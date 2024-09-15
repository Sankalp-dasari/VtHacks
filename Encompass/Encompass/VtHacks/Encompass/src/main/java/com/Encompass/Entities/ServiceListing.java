package com.Encompass.Entities;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@Document(collection = "services")
public class ServiceListing {
    @Id
    private String id;

    private String serviceName;
    private String description;
    private Double price;


}
