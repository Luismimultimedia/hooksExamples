import { useState } from "react"

export const useForm = (initialState = {}) => {

    const [formValue, setFormValue] = useState(initialState);

    const resetForm = () => {
      setFormValue(initialState);
    }

    const handleInputChange = ({ target }) => {
        setFormValue({
          ...formValue,
          [target.name]: target.value,
        });
      };

<<<<<<< HEAD
      return [formValue, handleInputChange];
=======
      return [formValue, handleInputChange, resetForm];
>>>>>>> 08e255cbe13b81a321fe26d27706b5d88e6843f8

}
