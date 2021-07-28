import Cliente from '../components/Cliente';

export default () => {
    return (
        <div style={{
            backgroundColor:"#222",
            color:"#fff",
            height:"100vh"
        }}>
            <Cliente name="Robson" idade={19} />
            <Cliente name="Pedro" />
        </div>
    );
} 