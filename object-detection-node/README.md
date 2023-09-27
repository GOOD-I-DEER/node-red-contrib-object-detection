# object-detection

This is a node that detects and outputs objects in the image.

### input

Image Buffer

- Image represented as a binary buffer

### property

![Untitled](https://github.com/GOOD-I-DEER/node-red-contrib-object-detection/assets/58355046/0bbeb62c-1a5a-4084-a0dc-ccba1149e5c1)

Name

- The name of the node displayed on the workspace.

Model

- A pre-trained model used for object detection. Supports yolov8n, yolov8s, and yolov8m models. Accuracy increases in the order n < s < m, but it also takes longer.

Return Value

- Type of data to be transmitted as an output of the node. Supports Detected Object, Image Buffer, and Image File.
  - Detected Object : Result object of the pre-trained model. A model can contain multiple objects with preset labels. Included values are x, y, w, h, prob.
    - x : zero-indexed offset from left edge of the original image
    - y : zero-indexed offset from top edge of the original image
    - w : the width of cropped image
    - h : the height of cropped image
    - prob : Accuracy of objects detected by the model
  - Image Buffer : Image buffer resulting from a pre-trained model
  - Image File : Image file resulting from a pre-trained model.

Absolute Path Dir

- Absolute path to save the file to. Show only when you select Image File as Return Value

Confidence Threshold

- Confidence threshold of the results of the pre-trained model. You must specify a value between 0 and 1. The lower the value, the more objects are detected.

### output

Data is output in the output format selected in the 'Return Value' property.

<details>
  <summary>Detected Object</summary>
  <img width="180" style="display : inline-block; margin-left: 10px;" alt="detected_object" src="https://github.com/GOOD-I-DEER/node-red-contrib-object-detection/assets/58355046/cc64b0fd-593c-423f-88df-0292e470f1c5">
</details>
<details>
  <summary>Image Buffer</summary>
  <img width="180" style="display : inline-block; margin-left: 10px;" alt="detected_object" src="https://github.com/GOOD-I-DEER/node-red-contrib-object-detection/assets/58355046/1dd35b12-f3cd-439b-bfa8-3ac0092c25e3">
</details>
<details>
  <summary>Image File</summary>
  <img width="180" style="display : inline-block; margin-left: 10px;" alt="detected_object" src="https://github.com/GOOD-I-DEER/node-red-contrib-object-detection/assets/58355046/30e4f8aa-b857-4792-9032-475f4de437b7">
</details>

### Examples

This is a simple example of this node.

![Untitled 4](https://github.com/GOOD-I-DEER/node-red-contrib-object-detection/assets/58355046/0615616c-10e9-4efa-9073-fecb5797aa4c)

### JSON

```json
[
  {
    "id": "4212d35061fe9b82",
    "type": "debug",
    "z": "83078a0b9760cbee",
    "name": "result",
    "active": true,
    "tosidebar": true,
    "console": false,
    "tostatus": false,
    "complete": "payload",
    "targetType": "msg",
    "statusVal": "",
    "statusType": "auto",
    "x": 1030,
    "y": 140,
    "wires": []
  },
  {
    "id": "4cc9810beb057ce1",
    "type": "good-object-detection",
    "z": "83078a0b9760cbee",
    "name": "",
    "returnValue": "0",
    "model": "yolov8n",
    "threshold": 0.5,
    "absolutePathDir": "",
    "x": 780,
    "y": 140,
    "wires": [["4212d35061fe9b82"]]
  },
  {
    "id": "1f6540f5de8d8204",
    "type": "file in",
    "z": "83078a0b9760cbee",
    "name": "Image Path",
    "filename": "",
    "filenameType": "str",
    "format": "",
    "chunk": false,
    "sendError": false,
    "encoding": "none",
    "allProps": false,
    "x": 550,
    "y": 140,
    "wires": [["4cc9810beb057ce1"]]
  },
  {
    "id": "27305ebce4a2d493",
    "type": "inject",
    "z": "83078a0b9760cbee",
    "name": "",
    "props": [
      {
        "p": "payload"
      },
      {
        "p": "topic",
        "vt": "str"
      }
    ],
    "repeat": "",
    "crontab": "",
    "once": false,
    "onceDelay": "3",
    "topic": "",
    "payload": "",
    "payloadType": "date",
    "x": 360,
    "y": 140,
    "wires": [["1f6540f5de8d8204"]]
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
