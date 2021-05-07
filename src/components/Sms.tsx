import React, { useEffect, useState } from 'react';
//import QRCode from 'qrcode-react'; //This declaration could have been used if qrcode-react is ES6 module feature compliant

const Sms: React.FC = () => {
    const QRCode = require('qrcode.react'); //qrcode-react is not compliant for ES6 module yet, therefore we are declaring.

    const [num, setNum] = useState('');
    const [message, setMessage] = useState('');

    const ShowNum = (event: any) => {
        setNum(event.target.value)
    }

    const ShowMessage = (event: any) => {
        setMessage(event.target.value)
    }

    useEffect(() => {
        window.alert(`Welcome to OrganatorQR Generator`);
        //if you remove the line below, you will get a warning because only count and not name is set as condition
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        document.title = 'OrganatorQR Generator';
    });

    {/**For SMS */}
    return (
        <div className="tile is-parent">
            <article className="tile is-child notification is-danger">
                <div className="level">
                    <div className="level-item has-text-centered">
                        <div>
                            <QRCode value={`SMS:${num}:${message}`} size={256} />
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="box">
                        <div className="field">
                            <label className="label">Phone Number</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Number" onInput={ShowNum} />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Message</label>
                            <div className="control">
                                <textarea className="textarea" placeholder="Type Message" onInput={ShowMessage}></textarea>
                            </div>
                        </div>

                    </div>
                </div>
            </article>
        </div>
    )
}

export default Sms;
