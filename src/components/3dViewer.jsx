import { Component, createRef } from 'react';
import { vtkActor } from '@kitware/vtk.js/Rendering/Core/Actor';
import { vtkRenderWindow } from '@kitware/vtk.js/Rendering/Core/RenderWindow';
import { vtkRenderer } from '@kitware/vtk.js/Rendering/Core/Renderer';
import { vtkVolumeMapper } from '@kitware/vtk.js/Rendering/Core/VolumeMapper';
import { vtkITKHelper } from '@kitware/vtk.js/Common/DataModel/ITKHelper';
import { readImageArrayBuffer } from 'itk-wasm';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.container = createRef();
  }

  componentDidMount() {
    // Create the VTK.js objects
    const mapper = vtkVolumeMapper.newInstance();
    const actor = vtkActor.newInstance();
    const renderer = vtkRenderer.newInstance();
    const renderWindow = vtkRenderWindow.newInstance();

    // Set the data prop as the input data for the mapper and actor
    mapper.setInputData(this.props.data);
    actor.setMapper(mapper);

    // Set the container element as the parent of the render window
    renderWindow.setContainer(this.container);

    // Add the actor to the renderer and the renderer to the render window
    renderer.addActor(actor);
    renderWindow.addRenderer(renderer);

    // Render the scene
    renderWindow.render();
  }

  componentDidUpdate(prevProps) {
    // Check if the data prop has changed
    if (prevProps.data !== this.props.data) {
      // Update the input data for the mapper and actor
      this.mapper.setInputData(this.props.data);
      this.actor.setMapper(this.mapper);

      // Render the scene
      this.renderWindow.render();
    }
  }

  render() {
    return (
      <div
        ref={(el) => {
          this.container = el;
        }}
      />
    );
  }
}

export default MyComponent;
