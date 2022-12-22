import { Accordion, Button, Image } from 'react-bootstrap';
import SchedulingItem from '../SchedulingItem';
import styles from './styles.module.scss';

export default function NextSchedules() {
  return (
    <div className={styles.container_accordion}>
      {/* <SchedulingItem /> */}
      <Accordion defaultActiveKey="0">
        {Array.from({ length: 7 }).map((_, index) => (
          <Accordion.Item key={index} eventKey={index.toString()}>
            <Accordion.Header>
              <div>
                <Image
                  src="http://github.com/wilkgillian.png"
                  alt="image"
                  height={50}
                  className="mx-2"
                  roundedCircle={true}
                />
                <span>Paciente {index}</span>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <Button variant="primary" className="my-2 p-2">
                Ver agendamento
              </Button>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}
