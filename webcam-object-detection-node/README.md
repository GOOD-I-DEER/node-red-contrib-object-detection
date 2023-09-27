# webcam-object-detection

This is a node that detects and outputs objects in images on a web browser using a webcam.

### input

Http request

- Http Get Request to request a web page to provide object detection service using a webcam in a web browser

### property

![Untitled 5](https://github.com/GOOD-I-DEER/node-red-contrib-object-detection/assets/58355046/6595558b-d0c3-4355-ae74-435eca4b7b8b)

Name

- The name of the node displayed on the screen

Model

- A pre-trained model used for object detection. Supports yolov8n, yolov8s, and yolov8m models. Accuracy increases in the order n < s < m, but it also takes longer.

Confidence Threshold

- Confidence threshold of the results of the pre-trained model. You must specify a value between 0 and 1. The lower the value, the more objects are detected.

Server Url

- Server URL to be applied to CORS settings. The default is localhost.

Socket Port

- A socket port that transmits object detection results using a websocket. Users can specify which port they want to use among ports that are not in use. The default value is 1889.

Webcam Test

- You can check the user's webcam screen in advance.

### output

Http response

- A web page to provide object detection service using webcam in web browser.

Detected object

- Result object of the pretrained model. A model can contain multiple objects with preset labels. Included values are x, y, w, h, prob.
  ![Untitled 6](https://github.com/GOOD-I-DEER/node-red-contrib-object-detection/assets/58355046/986dc2a4-044d-4ad8-80b6-2147660a699e)

### Examples

This is a simple example of this node.

![Untitled 7](https://github.com/GOOD-I-DEER/node-red-contrib-object-detection/assets/58355046/fd58dfeb-2f9b-43d0-a6eb-1ff10459fb10)

### JSON

```json
[
  {
    "id": "f341edcf122db704",
    "type": "http in",
    "z": "ff67e0c22a0e9932",
    "name": "",
    "url": "/webcamObjectDetection",
    "method": "get",
    "upload": false,
    "swaggerDoc": "",
    "x": 180,
    "y": 720,
    "wires": [["7c36ca24529c9981"]]
  },
  {
    "id": "8a1974a686e2ba92",
    "type": "http response",
    "z": "ff67e0c22a0e9932",
    "name": "",
    "statusCode": "",
    "headers": {},
    "x": 710,
    "y": 700,
    "wires": []
  },
  {
    "id": "14fad81fd8ec7ff6",
    "type": "debug",
    "z": "ff67e0c22a0e9932",
    "name": "Object detection result",
    "active": true,
    "tosidebar": true,
    "console": false,
    "tostatus": false,
    "complete": "true",
    "targetType": "full",
    "statusVal": "",
    "statusType": "auto",
    "x": 760,
    "y": 760,
    "wires": []
  },
  {
    "id": "7c36ca24529c9981",
    "type": "webcam-object-detection",
    "z": "ff67e0c22a0e9932",
    "name": "",
    "model": "yolov8n",
    "threshold": 0.5,
    "serverUrl": "localhost",
    "socketUrl": "http://localhost",
    "socketPort": "1889",
    "x": 470,
    "y": 720,
    "wires": [["8a1974a686e2ba92"], ["14fad81fd8ec7ff6"]]
  }
]
```

---

## **Discussions and suggestions**

Use **[GitHub Issues](https://github.com/GOOD-I-DEER/node-red-contrib-face-vectorization/issues)** to ask questions or to discuss new features.

---

## **Authors**

**[GOOD-I-DEER](https://github.com/GOOD-I-DEER)** in SSAFY(Samsung Software Academy for Youth) 9th

- [Kim Jaea](https://github.com/kimjaea)
- [Yi Jong Min](https://github.com/chickennight)
- [Lee Deok Yong](https://github.com/Gitgloo)
- [Lee Che Lim](https://github.com/leecr1215)
- [Lee Hyo Sik](https://github.com/hy06ix)
- [Jung Gyu Sung](https://github.com/ramaking)

---

## **Copyright and license**

Copyright Samsung Automation Studio Team under the **[GNU General Public License v3.0 license](https://www.gnu.org/licenses/gpl-3.0.html)**.

---

## **Reference**

- [Node-RED Creating Nodes](https://nodered.org/docs/creating-nodes/)
- [SamsungAutomationStudio Github Repository](https://github.com/Samsung/SamsungAutomationStudio)
- [Ultralytics YOLOv8](https://docs.ultralytics.com/)
- [yolov8 onnx on javascript](https://github.com/AndreyGermanov/yolov8_onnx_javascript)
- [yolov8 onnx on nodejs](https://github.com/AndreyGermanov/yolov8_onnx_nodejs)
