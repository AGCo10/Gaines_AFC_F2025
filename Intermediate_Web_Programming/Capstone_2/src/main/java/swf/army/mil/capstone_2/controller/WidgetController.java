package swf.army.mil.capstone_2.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import swf.army.mil.capstone_2.entity.Widget;
import swf.army.mil.capstone_2.service.WidgetService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/widget")
public class WidgetController {
    private final WidgetService widgetService;

    @Autowired
    public WidgetController(WidgetService widgetService) {
        this.widgetService = widgetService;
    }

    // Create or update a widget
    @PostMapping
    public ResponseEntity<Widget> createOrUpdateWidget(@RequestBody Widget widget) {
        Widget savedWidget = widgetService.saveWidget(widget);
        return ResponseEntity.ok(savedWidget);
    }

    // Retrieve all widgets
    @GetMapping
    public List<Widget> getAllWidgets() {
        return widgetService.getAllWidgets();
    }

    // Retrieve a widget by ID
    @GetMapping("/{id}")
    public ResponseEntity<Widget> getWidgetById(@PathVariable Long id) {
        Optional<Widget> widget = widgetService.getWidgetById(id);
        return widget.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Update a widget by ID
    @PatchMapping("/{id}")
    public ResponseEntity<Widget> updateWidgetById(@PathVariable Long id, @RequestBody Widget updatedCard) {
        Optional<Widget> card = widgetService.updateWidgetById(id, updatedCard);
        return card.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Delete a widget by ID
//    @DeleteMapping("/{id}")
//    public ResponseEntity<Void> deleteCard(@PathVariable Long id) {
//        widgetService.deleteWidget(id);
//        return ResponseEntity.notFound().build();
//    }

}
