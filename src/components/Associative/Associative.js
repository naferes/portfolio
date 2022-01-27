import React, { useContext} from 'react';

import './Associative.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { associativeData } from '../../data/associativeData'
import AssociativeCard from './AssociativeCard';

function Associative() {

    const { theme } = useContext(ThemeContext);
    return (
        <>
            {associativeData.associatives.length > 0 && (
                <div className="achievement" id="achievement" style={{backgroundColor: theme.secondary}}>
                <div className="achievement-body">
                    <h1 style={{color: theme.primary}}>Associative Life</h1>
                    <h4 style={{color:theme.tertiary}}>{associativeData.bio}</h4>
                </div>
                <div className="achievement-cards">
                    {associativeData.associatives.map(achieve => ( 
                        <AssociativeCard 
                        key={achieve.id}
                        id={achieve.id}
                        title={achieve.title}
                        details={achieve.details}
                        date={achieve.date}
                        field={achieve.field}
                        image={achieve.image}/>
                    ))}
                </div>
            </div>
            )}
        </>
    )
}

export default Associative
