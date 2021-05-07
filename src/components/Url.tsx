import React, { useEffect, useState } from 'react';
//import QRCode from 'qrcode-react'; //This declaration could have been used if qrcode-react is ES6 module feature compliant.

const Url: React.FC = () => {
    const QRCode = require('qrcode.react'); //qrcode-react is not compliant for ES6 module yet, therefore we are declaring.

    const [url, setUrl] = useState('');

    const ShowURL = (event: any) => {
        setUrl(event.target.value)
    }

    useEffect(() => {
        window.alert(`Welcome to OrganatorQR Generator`);
        //if you remove the line below, you will get a warning because only count and not name is set as condition
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        document.title = 'OrganatorQR Generator';
    });

    {/**For URL */}
    return (
        <div className="tile is-parent">
            <article className="tile is-child notification is-danger">
                <div className="level">
                    <div className="level-item has-text-centered">
                        <div>
                            <QRCode value={url} size={256} fgColor="purple" />
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="box">
                        <div className="field">
                            <label className="label">URL</label>
                            <div className="control">
                                <input className="input is-link" type="text" placeholder="Input Link" onInput={ShowURL} />
                            </div>
                        </div>

                    </div>
                </div>
            </article>
        </div>
    )
}

export default Url;