import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,

} from 'react-icons/bs';
import "./Thanks.css"

const Thanks = ({ data }) => {
  return (
    <div className="thanks-container">
        <h2>Falta pouco...</h2>
        <p>A sua opinião é muito importante, em breve você receberá um cupom de 10% de desconto para sua próxima compra.</p>
        <p>Para concluir sua avaliação clique no botão de Enviar abaixo.</p>
        <p className="review-data">
          <span>Satisfação com o produto:</span>
        </p>
        <p className="review-data">
          <span>Comentário:</span>
        </p>
    </div>
  );
};

export default Thanks;