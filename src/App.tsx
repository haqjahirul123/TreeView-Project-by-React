import React, {  useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NodeSelectEventArgs, TreeViewComponent } from '@syncfusion/ej2-react-navigations';
//import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
import { retreiveData } from "../src/API/service"
import DetailsView from "./components/detailsView"

const App=()=>  {
  const [treeData, settreeData] = useState([])
  const [NodeData, setNodeData] = useState([])
  

    useEffect(() => {
        // API call to get the Cars list
        retreiveData()
          .then((res) => settreeData(res))
          .catch((err) => console.log(err));
      }, []);
      console.log(NodeData)
  const datasourceFields: Object = {
    dataSource:treeData, id: 'id', text: 'name', child: 'children'
  };
  const enableMultiSelection: boolean = true;
  const enableCheckbox: boolean = true;
  const allowNodeEditing: boolean = true;
  const draganddropNodes: boolean = true;

  
 function nodeSelect(args: NodeSelectEventArgs): void {
    if (args.node.classList.contains('e-level-1')) {
      var nodeData1:any=args.nodeData
      var nodeDataArray1:any=Object.values(nodeData1)
      setNodeData(nodeDataArray1[1])
      console.log(nodeDataArray1[1]);
    //alert("djsdjk")
    }

    if (args.node.classList.contains('e-level-2')) {
        var nodeData:any=args.nodeData
        var nodeDataArray:any=Object.values(nodeData)
        setNodeData([])
        setNodeData(nodeDataArray[1])
    }  

    if (args.node.classList.contains('e-level-3')) {
      var nodeData:any=args.nodeData
      var nodeDataArray:any=Object.values(nodeData)
      setNodeData([])
      setNodeData(nodeDataArray[1])
  } 
  
 }
    return (<div>

    <TreeViewComponent fields={datasourceFields} 
      allowMultiSelection={enableMultiSelection}
      showCheckBox={enableCheckbox}

      nodeSelected={nodeSelect}
      
      onClick={(e)=>{treeData.map((tree:any)=>{
        //console.log(tree.children)
        return <div justify-content-md-left>      
              <DetailsView data={tree.name}/>
          </div>
        
      })}}
      allowEditing={allowNodeEditing}
      allowDragAndDrop={draganddropNodes}></TreeViewComponent> 
          <DetailsView  data={NodeData}/>
    </div> 
  )
  
}

export default App;
