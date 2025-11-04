package swf.army.mil.capstone_2.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import swf.army.mil.capstone_2.dto.WidgetResponseDTO;
import swf.army.mil.capstone_2.entity.Widget;
import swf.army.mil.capstone_2.service.WidgetService;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@RestController
@RequestMapping("/api/widget")
public class WidgetController {
    private final WidgetService widgetService;

    @Autowired
    public WidgetController(WidgetService widgetService) {
        this.widgetService = widgetService;
    }

    private WidgetResponseDTO toDTO(Widget widget) {
        return new WidgetResponseDTO(widget.getName(), widget.getDescription(), widget.getPrice(), widget.getRating());
    }

    // Create or update a widget
    @PostMapping
    public ResponseEntity<WidgetResponseDTO> createOrUpdateWidget(@RequestBody Widget widget) {
        Widget savedWidget = widgetService.saveWidget(widget);
        return ResponseEntity.ok(toDTO(savedWidget));
    }

    // Retrieve all widgets
    @GetMapping
    public ResponseEntity<List<WidgetResponseDTO>> getAllWidgets() {
        List<WidgetResponseDTO> responseList = widgetService.getAllWidgets().stream().map(this::toDTO).toList();
        return ResponseEntity.ok(responseList);
    }

    // Retrieve a widget by ID
    @GetMapping("/{id}")
    public ResponseEntity<WidgetResponseDTO> getWidgetById(@PathVariable Long id) {
        Optional<Widget> widget = widgetService.getWidgetById(id);
        if (widget.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(toDTO(widget.get()));
    }

    // Update a widget by ID
    @PatchMapping("/{id}")
    public ResponseEntity<WidgetResponseDTO> updateWidget(@RequestBody Widget updatedWidget) {
        try {
            widgetService.updateWidget(updatedWidget);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    //Delete a widget by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteWidget(@PathVariable Long id) {
        try {
            widgetService.deleteWidgetById(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
