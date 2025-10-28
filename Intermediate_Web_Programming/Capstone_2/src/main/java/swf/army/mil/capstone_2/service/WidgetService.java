package swf.army.mil.capstone_2.service;

import org.springframework.stereotype.Service;
import swf.army.mil.capstone_2.entity.Widget;
import swf.army.mil.capstone_2.repository.WidgetRepository;

import java.util.List;
import java.util.Optional;

@Service
public class WidgetService {
    private final WidgetRepository widgetRepository;

    public WidgetService(WidgetRepository widgetRepository) {
        this.widgetRepository = widgetRepository;
    }

    public List<Widget> getAllWidgets() {
        return widgetRepository.findAll();
    }

    public Widget saveWidget(Widget widget) {
        return widgetRepository.save(widget);
    }

    public Optional<Widget> getWidgetById(Long id) {
        return widgetRepository.findById(id);
    }

    public Optional<Widget> updateWidgetById(Long id, Widget updatedWidget) {
        return widgetRepository.findById(id).map(existingWidget -> {
            if (updatedWidget.getName() != null) {
                existingWidget.setName(updatedWidget.getName());
            }
            return widgetRepository.save(existingWidget);
        });
    }

//    public void deleteWidget(Long id) {
//    }
}
