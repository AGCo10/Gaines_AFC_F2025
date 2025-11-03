package swf.army.mil.capstone_2.service;


import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import swf.army.mil.capstone_2.entity.Widget;
import swf.army.mil.capstone_2.repository.WidgetRepository;

import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class WidgetServiceTest {

    @Mock
    WidgetRepository mockWidgetRepository;

    @InjectMocks
    WidgetService widgetService;

    @Test
    void getAllWidgets_shouldCallRepository() {
        widgetService.getAllWidgets();
        verify(mockWidgetRepository, times(1)).findAll();
    }

    @Test
    void getAllWidgets_shouldReturnAllWidget() {
        List<Widget> testWidgets = List.of(
                new Widget(1L, "banana", "more banana", "Even more bananas", 2.50, 4.0)
        );
        when(widgetService.getAllWidgets()).thenReturn(testWidgets);
        List<Widget> validator = widgetService.getAllWidgets();
        assert(validator.equals(testWidgets));
        verify(mockWidgetRepository, times(1)).findAll();

    }

    @Test
    void getWidgetById_shouldCallRepository() {
        widgetService.getWidgetById(1L);
        verify(mockWidgetRepository, times(1)).findById(1L);
    }

    @Test
    void getWidgetById_shouldReturnWidget() {
        Optional<Widget> testWidget = Optional.of(new Widget(1L, "banana", "more banana", "Even more bananas", 2.50, 4.0));
        when(widgetService.getWidgetById(1L)).thenReturn(testWidget);
        Optional<Widget> testValidator = widgetService.getWidgetById(1L);
        assert(testValidator.equals(testWidget));
        verify(mockWidgetRepository, times(1)).findById(1L);
    }

    @Test
    void saveWidget_shouldCallRepository() {
        Widget testWidget = new Widget(1L, "banana", "more banana", "Even more bananas", 2.50, 4.0);
        widgetService.saveWidget(testWidget);
        verify(mockWidgetRepository, times(1)).save(testWidget);
    }

    @Test
    void saveWidget_shouldReturnSavedWidget() {
        Widget testWidget = new Widget(1L, "banana", "more banana", "Even more bananas", 2.50, 4.0);
        when(mockWidgetRepository.save(testWidget)).thenReturn(testWidget);
        Widget testValidator = widgetService.saveWidget(testWidget);
        assert(testValidator.equals(testWidget));
        verify(mockWidgetRepository, times(1)).save(testWidget);
    }


    @Test
    void updateWidget_shouldUpdateAndReturnWidget() {
        Widget testWidget = new Widget(1L, "banana", "more banana", "Even more bananas", 2.50, 4.0);
        Widget updatedWidget = new Widget(1L, "Orange", "Not banana", "Never Is a Banana", 3.50, 4.0);
        when(mockWidgetRepository.findById(testWidget.getId())).thenReturn(Optional.of(testWidget));
        widgetService.updateWidget(updatedWidget);
        verify(mockWidgetRepository, times(1)).save(updatedWidget);
    }

    @Test
    void deleteWidget_shouldCallRepository() {
        Widget testWidget = new Widget(1L, "banana", "more banana", "Even more bananas", 2.50, 4.0);
        when(mockWidgetRepository.findById(1L)).thenReturn(Optional.of(testWidget));

        widgetService.deleteWidgetById(1L);

        verify(mockWidgetRepository, times(1)).deleteById(testWidget.getId());
        verify(mockWidgetRepository, times(1)).findById(1L);
    }

}
