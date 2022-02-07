import { UncontrolledTreeEnvironment, Tree, StaticTreeDataProvider } from 'react-complex-tree';
import 'react-complex-tree/lib/style.css';



const Homepage = () => {
    const items = {
      root: {
        index: 'root',
        hasChildren: true,
        children: ['child1', 'child2'],
        data: 'Root item',
      },
      child1: {
        index: 'child1',
        children: [],
        data: 'Child item 1',
      },
      child2: {
        index: 'child2',
        hasChildren: true,
        children: ['child3'],
        data: 'Child item 2',
      },
      child3: {
        index: 'child3',
        children: [],
        data: 'Child item 3',
      },
    };
    
  return (
    <div className="mt-20">
      <div>
        <small className="uppercase">Directory:</small>
   
    <UncontrolledTreeEnvironment
      dataProvider={new StaticTreeDataProvider(items, (item, data) => ({ ...item, data }))}
      getItemTitle={item => item.data}
      viewState={{}}
    >
  <Tree treeId="tree-1" rootItem="root" treeLabel="Tree Example" />
</UncontrolledTreeEnvironment>
</div>
      <div>
        <small className="uppercase">Relative Path:</small>
      </div>
    </div>
  );
}

export default Homepage;