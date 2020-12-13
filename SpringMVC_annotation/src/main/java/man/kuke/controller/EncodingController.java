package man.kuke.controller;

import com.sun.org.glassfish.gmbal.ParameterNames;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author: kuke
 * @date: 2020/12/13 - 22:32
 * @description:
 */
@Controller
public class EncodingController {

    @PostMapping("/man/encode")
    public String testEncoding(String name, Model model) {
        model.addAttribute("msg", name);
        System.out.println(name);
        return "hello";
    }
}
