import React /*  { useEffect } */ from 'react';
// import { useParams } from 'react-router-dom';
// import { EventEntity } from 'types';
// import { useEventsContext } from '../../../utils/hooks/events-hooks/useEventsContext';
// import { useFetch } from '../../../utils/hooks/useFetch';
// import backgrounImg from '../../../images/space.png';
// import { ControlPanel } from '../../layout/index';
// import { NotFound } from '../NotFound/NotFound';

// import {
//   Paragraph,
//   SectionCart,
//   SectionHeader,
//   Spiner,
//   TaskForm,
// } from '../../common/index';
// import styles from './Event.module.scss';

export const Event = () => {
  // const { noEvent, cathegoryLabel } = oneEvent;
  // const { id } = useParams();
  // const { data, loading, fetchData } = useFetch<EventEntity>();

  // const {
  //   state: { event },
  //   dispatch,
  // } = useEventsContext();

  // useEffect(() => {
  //   fetchData(`http://localhost:3001/events/${id}`);
  //   if (data) {
  //     dispatch({ type: 'SET_CURRENT_EVENT', payload: data });
  //   }
  // }, [dispatch, data, fetchData, id]);

  // if (!task || loading === 'fetching') {
  //   return <Spiner />;
  // }

  return (
    <p>Event</p>
    // <SectionCart>
    //   <div className={styles.height}>
    //     {task.id === id ? (
    //       <div className={styles.task}>
    //         <div className={styles.imgWrap}>
    //           <img src={backgrounImg} alt='woman in space' />
    //         </div>
    //         <SectionHeader text={task.title} />
    //         <Paragraph text={`${task.description}`} />
    //         <p className={styles.taskLabel}>
    //           {cathegoryLabel} <span>{task.category}</span>
    //         </p>
    //         <p className={styles.taskLabel}>
    //           <span>{task.status}</span>
    //         </p>
    //       </div>
    //     ) : (
    //       <NotFound message={noEvent} />
    //     )}
    //     {task.id === id && (
    //       <ControlPanel>
    //         <TaskForm task={task} />
    //       </ControlPanel>
    //     )}
    //   </div>
    // </SectionCart>
  );
};
