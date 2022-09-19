import style from "./Preguntas.module.css";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";

const Preguntas = () => {
  const { t, i18n } = useTranslation("global");
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <section className={style.section} id='Preguntas'>
      <div className={style.espacio}></div>
      <div className={style.container}>
        <div className={style.titulo}>
          <h1>{t("Preguntas.Titulo")}</h1>
        </div>
        <div>
          <div className={style.acordion}>
            <div className={style.menu1}>
              <div className={style.individual}>
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel1bh-content'
                    id='panel1bh-header'
                  >
                    <div className={style.fuente}>
                      <Typography>Accordion 1</Typography>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div className={style.individual}>
                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel2bh-content'
                    id='panel2bh-header'
                  >
                    <div className={style.fuente}>
                      <Typography>Accordion 2</Typography>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div className={style.individual}>
                <Accordion
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel3bh-content'
                    id='panel3bh-header'
                  >
                    <div className={style.fuente}>
                      <Typography>Accordion 2</Typography>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div className={style.individual}>
                <Accordion
                  expanded={expanded === "panel4"}
                  onChange={handleChange("panel4")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel4bh-content'
                    id='panel4bh-header'
                  >
                    <div className={style.fuente}>
                      <Typography>Accordion 2</Typography>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>

            <div className={style.menu2}>
              <div className={style.individual}>
                <Accordion
                  expanded={expanded === "panel5"}
                  onChange={handleChange("panel5")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel5bh-content'
                    id='panel5bh-header'
                  >
                    <div className={style.fuente}>
                      <Typography>Accordion 1</Typography>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div className={style.individual}>
                <Accordion
                  expanded={expanded === "panel6"}
                  onChange={handleChange("panel6")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel6bh-content'
                    id='panel6bh-header'
                  >
                    <div className={style.fuente}>
                      <Typography>Accordion 2</Typography>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div className={style.individual}>
                <Accordion
                  expanded={expanded === "panel7"}
                  onChange={handleChange("panel7")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel7bh-content'
                    id='panel7bh-header'
                  >
                    <div className={style.fuente}>
                      <Typography>Accordion 2</Typography>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div className={style.individual}>
                <Accordion
                  expanded={expanded === "panel8"}
                  onChange={handleChange("panel8")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel8bh-content'
                    id='panel8bh-header'
                  >
                    <div className={style.fuente}>
                      <Typography>Accordion 2</Typography>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.espacio2}></div>
    </section>
  );
};

export default Preguntas;
