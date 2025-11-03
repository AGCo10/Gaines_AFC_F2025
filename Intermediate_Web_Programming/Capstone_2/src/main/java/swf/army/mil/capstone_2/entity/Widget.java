package swf.army.mil.capstone_2.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "widget")
@Setter
@Getter
@EqualsAndHashCode
public class Widget {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String imageURL;
    private String name;
    private String description;
    private Double price;
    private Double rating;

    public Widget(Long id, String imageURL, String name, String description, Double price, Double rating) {
        this.id = id;
        this.imageURL = imageURL;
        this.name = name;
        this.description = description;
        this.price = price;
        this.rating = rating;
    }

    public Widget() {
    }

}
