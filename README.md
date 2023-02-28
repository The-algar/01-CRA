<p align="center"><img src="https://github.com/The-algar/OC-P14-REACT-MODALE/blob/master/src/lib/components/assets/modale.JPG?raw=true" alt="Preview of the Modal component" /></p>

# React Modal: A Simple and Customizable Component with Animation

### Overview
The React Modal is a customizable component that renders a pre-formatted modal for use in React projects. This component offers several features and options, such as: 

<ul>
<li>Customizable background layout</li>
<li>Customizable container layout</li>
<li>Customizable content style</li>
<li>Ability to add custom content inside the modal</li>
<li>Option to enable or disable modal animation</li>
<li>Option to display or hide the close button</li>
</ul>

## Installation
To use the React Modal component, you can install it via npm:

npm install oc-p14-wh-react-modale

## Usage
### Importing the Modal Component
To use the Modal component, simply import it into your React file and define the desired children for the content of your modal. You can also define custom styles if you want to further customize your modal's appearance.

import { Modal } from @the_algar/oc-p14-react-modale

### Example
    <Modal
        hideModal={closeModal}
        styleModalBackground
        styleModal={{ padding: 25, backgroundColor: 'red' }}
        styleModalContent
        animation={true}
        closeButton={true}
    >
        <h1>Your modal message here!</h1>
        <p>Add more text, an image, or an input field.</p>
    </Modal>

### State
The Modal component's functionality is controlled by the local state of the parent component. Therefore, the parent component requires **state** to work properly. You can use any variable names you prefer to track the state of the modal. I used modalIsOpen and setModalIsOpen in my example.

  const [modalIsOpen, setModalIsOpen] = useState(false)

The initial state of the modal should be set to false. An action on the parent component changes the state to **true**.

const handleSubmit = () => {
    setModalIsOpen(true)
}

This will display the Modal component:

{modalIsOpen && (
    <Modal
        hideModal={closeModal}
        styleModalBackground
        styleModal
        styleModalContent
        animation={true}
        closeButton={true}
    >
        <p>Your modal message here!</p>	      
    </Modal>
)}

### Props

The following table lists the props available for the Modal component:

Name  | Type | Description | Required
------------- | ------------- | ------------- | ------------- 
*hideModale*  | Function | to close modal | **required**
*styleModaleBackground*  | Object | inline styles | optional
*styleModale*  | Object | inline styles | optional
*styleModaleContent*  | Object | inline styles | optional
*animation*  | Boolean | to activate or not the animation of the modal appear | **required**
*closeButton*  | Boolean | to display or not button close | **required**

**1. *hideModale* prop**

The "hideModal" prop is a function that closes the modal. You should provide a function to hide the modal when the user clicks the button or the background of the modal. This prop is required.

 const closeModale = () => {
        setModaleIsOpen(false)
     	}

 **2. *styleModaleBackground* prop**
 
 The "styleModaleBackground" prop receives inline styles for customizing the modal background.

 **3. *styleModale* prop**

 The "styleModaleBackground" prop receives inline styles for customizing the modal background.

**4. *styleModaleContent* prop**

The "styleModaleContent" prop receives inline styles for customizing the modal's content.

**5. *animation* prop**

The "animation" prop is **required** and can be set to **true** to enable the built-in animation effect or **false** to turn it off.

**6. *closeButton* prop**

The "closeButton" prop is required and receives a boolean value to determine whether the close button should be displayed (**true**) or not (**false**).

"*closeButton*" is **required**.

## Contributing
Contributions are always welcome!

To contribute to this project, please follow these steps:
<ol>
<li>Fork this repository</li>
<li>Create a new branch for your feature or bugfix: git checkout -b your-feature-or-bugfix</li>
<li>Make your changes and commit them: git commit -am 'Add some feature'</li>
<li>Push your changes to your branch: git push origin your-feature-or-bugfix</li>
<li>Submit a pull request to the main branch of this repository</li>
</ol>

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
<ul>
<li>This project was developed as part of the OpenClassrooms Front-End Developer Path.</li>
<li>The idea for this project came from the need to create a simple and customizable modal component for React projects.</li>
</ul>
Thank you for using this modal component! If you have any questions, suggestions or bug reports, please feel free to open an issue.