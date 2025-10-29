package swf.army.mil.capstone_2.entity;

import lombok.Data;

@Data
public class Widget {
    private Long id;
    private String imageURL;
    private String name;
    private String description;
    private Double price;
    private Double rating;

}
