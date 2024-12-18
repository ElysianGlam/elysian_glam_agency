import { useState } from "react";
import { motion, LazyMotion, domAnimation } from "framer-motion";
import move from "lodash-move";
import { cases } from "../Constants/constants";

const casesImages = cases.map((caseItem) => {
  return caseItem.image;
});

const cardsOffset = 30;
const scaleFactor = 0.06;

const CaseCards = () => {
  const [cards, setCards] = useState(casesImages);
  const moveToEnd = (from) => {
    setCards(move(cards, from, cards.length - 1));
  };

  return (
    <div className="flex w-full h-full justify-center items-center">
      <LazyMotion features={domAnimation}>
        <motion.ul
          initial={{ x: 200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="relative w-[80%] h-[70%]"
        >
          {cards.map((image, index) => {
            const canDrag = true;
            return (
              <motion.li
                key={image}
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  cursor: canDrag ? "grab" : "auto",
                }}
                animate={{
                  top: index * -cardsOffset,
                  scale: 1 - index * scaleFactor,
                  zIndex: casesImages.length - index,
                }}
                transition={{
                  duration: 0.2,
                  type: "spring",
                }}
                drag={canDrag ? "y" : false}
                dragConstraints={{
                  top: 10,
                  bottom: 10,
                }}
                onDragEnd={() => moveToEnd(index)}
                className="absolute w-full h-full bg-primary-400 origin-[top-center] list-none rounded-xl"
              ></motion.li>
            );
          })}
        </motion.ul>
      </LazyMotion>
    </div>
  );
};

export default CaseCards;
