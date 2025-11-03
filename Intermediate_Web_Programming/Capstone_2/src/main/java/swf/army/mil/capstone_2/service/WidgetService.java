package swf.army.mil.capstone_2.service;

import org.springframework.stereotype.Service;
import swf.army.mil.capstone_2.entity.Widget;
import swf.army.mil.capstone_2.repository.WidgetRepository;

import java.util.List;
import java.util.NoSuchElementException;
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

    public void updateWidget(Widget updatedWidget) throws NoSuchElementException {
        widgetRepository.findById(updatedWidget.getId()).orElseThrow();
        updatedWidget.setDescription(updatedWidget.getDescription());
        updatedWidget.setPrice(updatedWidget.getPrice());
        updatedWidget.setName(updatedWidget.getName());
        updatedWidget.setImageURL(updatedWidget.getImageURL());
        updatedWidget.setRating(updatedWidget.getRating());
        widgetRepository.save(updatedWidget);
    }

    public Optional<Widget> deleteWidgetById(Long l) throws NoSuchElementException {
        Optional<Widget> foundWidget = getWidgetById(l);
        if (foundWidget != null) {
            widgetRepository.deleteById(l);
            return foundWidget;
        }
        return null;
    }
}
