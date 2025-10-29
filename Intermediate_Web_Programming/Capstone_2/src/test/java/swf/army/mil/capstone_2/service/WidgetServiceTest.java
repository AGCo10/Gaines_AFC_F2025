package swf.army.mil.capstone_2.service;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import swf.army.mil.capstone_2.entity.Widget;
import swf.army.mil.capstone_2.repository.WidgetRepository;

import java.util.Optional;

@WebMvcTest
public class WidgetServiceTest {

        const WidgetRepository mockWidgetRepository;
        const WidgetService widgetService;

        describe('Get All Widgets', () => {

    })

        describe('saveWidget', () => {
                it('should save and return the widget', () => {
            const widget = new Widget(1, 'New Widget');
        widgetRepository.save.mockReturnValue(widget);

            const result = widgetService.saveWidget(widget);
        expect(result).toEqual(widget);
        expect(widgetRepository.save).toHaveBeenCalledWith(widget);
        });
    });

        describe('getWidgetById', () => {
                it('should return the widget if found', () => {
            const widget = new Widget(1, 'Widget1');
        widgetRepository.findById.mockReturnValue(Optional.of(widget));

            const result = widgetService.getWidgetById(1);
        expect(result).toEqual(Optional.of(widget));
        expect(widgetRepository.findById).toHaveBeenCalledWith(1);
        });

        it('should return an empty optional if not found', () => {
                widgetRepository.findById.mockReturnValue(Optional.empty());

            const result = widgetService.getWidgetById(999);
        expect(result).toEqual(Optional.empty());
        expect(widgetRepository.findById).toHaveBeenCalledWith(999);
        });
    });

        describe('updateWidgetById', () => {
                it('should update the widget if found', () => {
            const existingWidget = new Widget(1, 'Old Widget');
            const updatedWidget = new Widget(null, 'Updated Widget');
        widgetRepository.findById.mockReturnValue(Optional.of(existingWidget));
        widgetRepository.save.mockReturnValue(existingWidget);

            const result = widgetService.updateWidgetById(1, updatedWidget);
        expect(result).toEqual(Optional.of(existingWidget));
        expect(existingWidget.getName()).toBe('Updated Widget');
        expect(widgetRepository.save).toHaveBeenCalledWith(existingWidget);
        });

        it('should return an empty optional if the widget is not found', () => {
            const updatedWidget = new Widget(null, 'Updated Widget');
        widgetRepository.findById.mockReturnValue(Optional.empty());

            const result = widgetService.updateWidgetById(999, updatedWidget);
        expect(result).toEqual(Optional.empty());
        expect(widgetRepository.findById).toHaveBeenCalledWith(999);
        });
    });

        // Uncomment and implement this test when the deleteWidget method is available
    /*
    describe('deleteWidget', () => {
        it('should delete the widget if found', () => {
            const id = 1;
            widgetRepository.findById.mockReturnValue(Optional.of(new Widget(id, 'Widget1')));
            widgetService.deleteWidget(id);
            expect(widgetRepository.findById).toHaveBeenCalledWith(id);
            // Add verification for delete action once implemented
        });

        it('should not throw an error if the widget is not found', () => {
            const id = 999;
            widgetRepository.findById.mockReturnValue(Optional.empty());
            expect(() => widgetService.deleteWidget(id)).not.toThrow();
        });
    });
    */
    });
}
