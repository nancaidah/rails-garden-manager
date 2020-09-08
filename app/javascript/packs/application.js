import "bootstrap";
import { hotjar } from '../services/hotjar';

document.addEventListener("turbolinks:load", function(event) {
    hj('stateChange', '<%=request.referer%>');
});
