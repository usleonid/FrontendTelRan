export const withBackGround = WrappedComponent => props => {
    const bg = {
        backgroundColor: 'grey'
    }

    return (
        <div style={bg}>
            <WrappedComponent {...props}/>
        </div>
    );
};