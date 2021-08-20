import '../../styles/Project.scss';
import {Row, Col} from 'react-bootstrap';
import ProjectTextCard from '../ProjectTextCard';

function NetworkingLibrary() {
    return (
        <div className="project">
            <Row>
                <Col md={9}>
                    <ProjectTextCard>
                        <h2>Networking Library</h2>
                        <h5>Status: Dropped (2021)</h5>
                        <br />
                        <h3>Summary</h3>
                        <p>In this project I set out to build my own high level networking library for which I could use for a networked game project I was working on aswell as any future networked game projects.</p>
                        <p>I learnt a bunch about game networking during this project and eventually decided to use an existing networking library for my game.</p>
                    </ProjectTextCard>
                </Col>
                <Col>
                    <ProjectTextCard>
                        <h2>Technologies</h2>
                        <ul>
                            <li>Unity (Engine)</li>
                            <li>C#</li>
                            <li>ENet-CSharp (Library)</li>
                        </ul>
                    </ProjectTextCard>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <ProjectTextCard>
                        <h2>Why?</h2>
                        <p>
                            After using both Photon 2 and Mirror (networking libraries), I found they both coupled client and server code far more than I liked. 
                            These libraries were targeted at users looking to quickly standup networked games but their ease of use came at the expense of coupling. 
                        </p>
                        <p>I wanted to create my own high level networking library that I could use for another game project I was working on that would keep both client and server code seperated.</p>
                    </ProjectTextCard>
                </Col>

                <Col>
                    <ProjectTextCard>
                        <h2>Transport Protocols</h2>
                        <p>Initially I set out to write my own network communication layer which resulted gaining a deeper understanding of TCP and UDP transport protocols.</p>
                        <p>Writting classes for packaging bytes and learning about techniques used for packet size reduction and prioritization gave me valuable insight into network performance and optimization.</p>
                        <p>Ultimately I swapped to using the library ENet-CSharp which gave me a great foundation to build my high level library upon.</p>
                    </ProjectTextCard>
                </Col>
            </Row>
            <Row>
                <Col md={3}>
                    <ProjectTextCard>
                        <h2>Topics Touched</h2>
                        <ul>
                            <li>Networked Interpolation</li>
                            <li>Networked Animation</li>
                            <li>Object Authority</li>
                            <li>Reliable UDP</li>
                            <li>Delta Compression</li>
                            <li>Cheat Detection</li>
                            <li>Proximity Filtering</li>
                        </ul>
                    </ProjectTextCard>
                </Col>
                <Col>
                    <ProjectTextCard>
                        <h2>Conclusion</h2>
                        <p>
                            As I got further and further into creating my own networking library I realized I wasn't able to work on my actual game as muchb as I wanted.
                            In the end I went back to working with Mirror and with my new understanding of networking, was able to quickly achieve better results than the last time. 
                        </p>
                    </ProjectTextCard>
                </Col>
            </Row>
        </div>
    )
}

export default NetworkingLibrary
