import React from 'react'
import styles from './index.css'
import { connect } from 'dva'


function index(props) {
    return (
        <>

            <div className={styles.header}>
                {props.header}
            </div>
            {
                !props.show && <div className={styles.main}>
                    {props.main}
                </div>
            }


        </>
    )
}


const mapStateToProps = state => ({
    show: state.header.show
})

export default connect(mapStateToProps)(index);
