//Myla Fairchild
//I know HL7, hire me!

//Message Types
const msh = "MSH"; //Message Header
const pid = "PID"; //Patient ID 
const pv1 = "PV1"; //Patient Visit
const evn = "EVN"; //Event
const obr = "OBR"; //Order
const obx = "OBX"; //Result

//Segments
const hl7 = {
"ack": [msh, "MSA", "AA", "AR", "AE", "CA", "CR", "CE"],
"adt^a01": [msh, pid, evn, pv1, "NK1"],
"orm^o01": [msh, pid, pv1, "IN1", "DG1", "ORC", obr],
"oru^r01": [msh, pid, pv1, "ORC", obr, obx],
"sui^s01": [msh, "SCH", pid, pv1, "RGS", "AIG", "AIL", "AIP"],
"mdm^t02": [msh, pid, "TXA", obx],
"qry^a19": [msh, "SFT", "QRD", "QRF"]
};

var prompt = require('prompt');
const userPrompt = 'Tell me the message type, and I\'ll tell you the segments! (example: ADT^A01) ';
prompt.start();
prompt.get([userPrompt], function (err, result) {
var response = hl7[result[userPrompt].toLowerCase()];
if (response === undefined) {
console.error("Bad");
} else
console.log(response);
});

 
