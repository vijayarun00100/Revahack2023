const CoursePageLayout = ({
    children
}:{
    children:React.ReactNode
}) => {
    return ( 
        <div className="h-full">
            <div className="text-white">hi</div>
            {children}
        </div>
     );
}
 
export default CoursePageLayout;