import { Accordion,AccordionSummary,AccordionDetails,Typography} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export const MuiAccordin = () => {
  return (
    <div>
        <Accordion>
            <AccordionSummary 
                id='panel1-header'
                aria-controls='panel1-content'
                expandIcon={<ExpandMoreIcon/>}>
                <Typography variant='h6'><u>Accordin-01</u></Typography>
             </AccordionSummary>
             <AccordionDetails>
                <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores recusandae omnis ipsa accusantium! Nostrum illum earum dicta non suscipit atque, a laudantium voluptatibus culpa animi magnam fuga temporibus ipsam dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, similique architecto? Iste ratione, assumenda architecto quos cumque aliquam rem perspiciatis natus ullam possimus culpa deleniti nihil nemo dolore, quis odit?</Typography>
             </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary 
                id='panel2-header'
                aria-controls='panel2-content'
                expandIcon={<ExpandMoreIcon/>}>
                <Typography variant='h6'><u>Accordin-02</u></Typography>
             </AccordionSummary>
             <AccordionDetails>
                <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores recusandae omnis ipsa accusantium! Nostrum illum earum dicta non suscipit atque, a laudantium voluptatibus culpa animi magnam fuga temporibus ipsam dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, similique architecto? Iste ratione, assumenda architecto quos cumque aliquam rem perspiciatis natus ullam possimus culpa deleniti nihil nemo dolore, quis odit?</Typography>
             </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary 
                id='panel3-header'
                aria-controls='panel3-content'
                expandIcon={<ExpandMoreIcon/>}>
                <Typography variant='h6'><u>Accordin-03</u></Typography>
             </AccordionSummary>
             <AccordionDetails>
                <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores recusandae omnis ipsa accusantium! Nostrum illum earum dicta non suscipit atque, a laudantium voluptatibus culpa animi magnam fuga temporibus ipsam dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, similique architecto? Iste ratione, assumenda architecto quos cumque aliquam rem perspiciatis natus ullam possimus culpa deleniti nihil nemo dolore, quis odit?</Typography>
             </AccordionDetails>
        </Accordion>
        
    </div>
  )
}
