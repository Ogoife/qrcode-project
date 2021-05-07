import React, { useEffect, useState } from 'react';
//import QRCode from 'qrcode-react'; //This declaration could have been used if qrcode-react is ES6 module feature compliant

const Email: React.FC = () => {
    const QRCode = require('qrcode.react'); //qrcode-react is not compliant for ES6 module yet, therefore we are declaring.

    const [mail, setMail] = useState('');
    const [sub, setSub] = useState('');
    const [body, setBody] = useState('');

    const ShowMail = (event: any) => {
        setMail(event.target.value)
    }

    const ShowSub = (event: any) => {
        setSub(event.target.value)
    }

    const ShowBody = (event: any) => {
        setBody(event.target.value)
    }

    useEffect(() => {
        window.alert(`Welcome to OrganatorQR Generator`);
        //if you remove the line below, you will get a warning because only count and not name is set as condition
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        document.title = 'OrganatorQR Generator';
    });

    return (
        <div>
            {/**For Email */}
            <div className="tile is-parent">
                <article className="tile is-child notification is-danger">
                    <div className="level">
                        <div className="level-item has-text-centered">
                            <div>
                                <QRCode value={`mailto:${mail}?subject=${sub}&body=${body}.`} size={256} />
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div className="box">
                            <div className="field">
                                <label className="label">Mail To</label>
                                <div className="control">
                                    <input className="input" type="text" placeholder="Email address" onInput={ShowMail} />
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Subject</label>
                                <div className="control">
                                    <input className="input" type="text" placeholder="Subject" onInput={ShowSub} />
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Body</label>
                                <div className="control">
                                    <textarea className="textarea" placeholder="Write Mail here" onInput={ShowBody}></textarea>
                                </div>
                            </div>

                        </div>
                    </div>
                </article>
            </div>  
     </div>
    )
}
 export default Email; 