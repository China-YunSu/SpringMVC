package man.kuke.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author: kuke
 * @date: 2020/12/12 - 14:45
 * @descripti   on:
 */
@Controller
@RequestMapping("/kuke")
public class HelloController {

    @RequestMapping("/hello")
    public String hello2(Model model) {
        model.addAttribute("msg","helloSpringAnnoation");
        return "hello";//会被 视图解析器解析处理
    }

    @RequestMapping("/hi")
    public String hello(Model model) {
        model.addAttribute("msg","helloSpringAnnoation");
        return "redirect:hello";//会被 视图解析器解析处理
    }


}

