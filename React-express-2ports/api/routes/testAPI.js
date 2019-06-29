var express = require("express");
var router = express.Router();
const axios = require('axios');

function pythonserver_http( url) {

    var ret_data ;
    axios.get(url)
        .then(function (response) {
            // handle success
            console.log(response);
            console.log('====================== in side testAPI.js file ==============');
            ret_data = response ;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            ret_data = { 'Error asr' : 1 } ;
        });
        console.log('before ====== s  === response:\n');
        return  ret_data ;
  }
 
// two things: 1) see in live-bundle.js file  where is response going?
// 2. calling above pythonserver_http() function it is NOT liking, do INLINE code only
// 3. on EDIT button click , from live-bundel.js , the URL coming as :3000 not  :3009 so 
 //  do  string replace in 'backendscript' 
 // 4. we need to get passed full URL params in 3009 Node server , for now it is hardcode
 //
router.get("/", function(req, res, next) {
    url = 'http://localhost:4999/LIVE_exec_py3.py?user_script=omnamo987sri%20%3D%20999%20%0Aa%20%3D%205&raw_input_json=&options_json=%7B%22cumulative_mode%22%3Afalse%2C%22heap_primitives%22%3Afalse%2C%22show_only_outputs%22%3Afalse%2C%22origin%22%3A%22opt-live.js%22%7D&user_uuid=e538084a-482e-4d6c-d08a-f2ef57fdec31&session_uuid=c5b8dc52-8712-46a2-891f-42bdd5bee0fa&exeTime=1561744207531' ;
    //var s = pythonserver_http(url);

    s = ' {"code": "omnamosri = 99987 \na = 5", "trace": [{"line": 1, "event": "step_line", "func_name": "", "globals": {}, "ordered_globals": [], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 2, "event": "step_line", "func_name": "", "globals": {"omnamosri": 999}, "ordered_globals": ["omnamosri"], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 2, "event": "return", "func_name": "", "globals": {"omnamosri": 999, "a": 5}, "ordered_globals": ["omnamosri", "a"], "stack_to_render": [], "heap": {}, "stdout": ""}]}';
    console.log('s  === response:\n');
    console.log(s);
    res.send(s);
});

module.exports = router;
