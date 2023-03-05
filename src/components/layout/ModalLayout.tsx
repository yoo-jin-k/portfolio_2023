import React, {useState} from 'react';
import { Layout, Grid, Modal } from 'antd';

import '../../components/style/modal.scss';


// const { Content } = Layout;
const { useBreakpoint } = Grid;
type ModalProps = {
    // open: () => void,
    visible: boolean,
    children: React.ReactNode,
    onOk: () => void,
    onCancel: () => void
}
const ModalLayout = (props: ModalProps) => {
    // const [isModalOpen, setIsModalOpen] = useState(false);
    const { visible, children, onOk, onCancel } = props;
    const screens = useBreakpoint();
    const { xs: isXs } = screens;
    const { md: isMd } = screens;
    // const handleOk = () => {
    //     setIsModalOpen(false);
    // };
    // const handleCancel = () => {
    //     setIsModalOpen(false);
    // };

    return (
            <Modal
                visible={visible}
                // open={open}
                centered
                onOk={onOk}
                onCancel={onCancel}
                width={isMd?700:300}
                className={'pf_modal'}
                footer={'null'}>
                {children}
            </Modal>
    );
};

export default ModalLayout;
