import { useContext, useState } from "react";
import { CatsContext } from "../../context/cat-context";
import useForm from "../../hooks/useForm";
import styles from "./styles.module.scss";
import CatDataService from "../../services/cat.service";

const Form = ({
  setShow,
}: {
  setShow: (show: boolean) => void;
}): JSX.Element => {
  const [error, setError] = useState<string>("");
  const { formData, handleInputChange, handleSubmit } = useForm(
    {
      id: "",
      name: "",
      weightmetric: "",
      weightimperial: "",
    },
    (formData: any) => {
      if (
        formData.weightmetric === "" ||
        formData.weightimperial === "" ||
        formData.name === "" ||
        formData.id === ""
      ) {
        setError("All the fields are required!");
        return;
      }
      if (formData.id.length !== 4)
        setError("id must be equal to 4 characters");
      const findImgCat = catApi.filter((cat: any) => cat.id === formData.id)[0];
      if (!findImgCat) {
        CatDataService.create(formData).catch((error) => {
          console.log(error);
        });
        (window as any).location.reload();
        setError("");
        setShow(false);
        return;
      }
      CatDataService.create({ ...formData, image: findImgCat.image.url });
      setShow(false);
      setError("");
      (window as any).location.reload();
    }
  );

  const { id, name, weightmetric, weightimperial } = formData;
  const { catApi } = useContext(CatsContext);
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3>Add a new cat </h3>
      {error && <p>{error}</p>}
      <input
        placeholder="Enter the ID of the cat"
        type="text"
        name="id"
        value={id}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="name"
        placeholder="Enter the name of the cat"
        value={name}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="weightimperial"
        placeholder="Enter the weight imperial of the cat"
        value={weightimperial}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="weightmetric"
        placeholder="Enter the weight metric of the cat"
        value={weightmetric}
        onChange={handleInputChange}
      />
      <button className="pointer" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
