import React from "react";
import SiderBar from "../../components/SiderBar";
import { useTracker } from "meteor/react-meteor-data";
import PageHeader from "../../components/PageHeader";
import { useHistory } from "react-router-dom";
import TextArea from "../../components/TextArea";
import Input from "../../components/Input";
import "./styles.css";

const Comments = () => {
    const profile = useTracker(() => {
      const history = useHistory();
      if (!Meteor.userId()) {
        history.push("/login");
        return [];
      }
    });

const update = () => {};

return (
<div className ="comments">
    <SiderBar />
    <PageHeader title="Comente sobrea a sua aula."></PageHeader>
    <main>
        <Input
        name="notes"
        label="Título"/>
        <div className="text-area-anotation">
        <TextArea label= "Comentário"/>
        </div>
    
    <button type="submit">Salvar Comentário</button>
    </main>
</div>


);
}
export default Comments;