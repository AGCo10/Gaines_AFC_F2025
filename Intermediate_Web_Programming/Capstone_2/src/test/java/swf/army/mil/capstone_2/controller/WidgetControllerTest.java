package swf.army.mil.capstone_2.controller;

import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;
import swf.army.mil.capstone_2.service.WidgetService;


import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(WidgetController.class)
@AutoConfigureMockMvc
@ExtendWith(MockitoExtension.class)
public class WidgetControllerTest {

    @Autowired
    private MockMvc mvc;

//    @Autowired
//    private ObjectMapper mapper;

    @MockitoBean
    private WidgetService mockWidgetService;


    @Nested
    class GetAll {

        @Test
        void shouldAcceptGetRequest() throws Exception {
            mvc.perform(get("/api/widget"))
                    .andExpect(status().isOk());
        }

        @Test
        void shouldCallWidgetService() throws Exception {
            mvc.perform(get("/api/widget"));
            verify(mockWidgetService, times(1)).getAllWidgets();
        }

    }


    @Nested
    class DeleteCard {

    }

}