---
title: 1 Introduction, Qubits and Unitaries
category: Quantum Computing
---

## Introduction

* Quantum physics studies the behavior and properties of particles at microscopic scales.
* Quantum systems can behave very differently from objects in the classical/macroscopic world.
* Quantum computing uses quantum-mechanical properties to perform computations that may provide a quantum advantage over classical computers for certain problems.

### Classical Bits vs Quantum States

* Classical computers represent information using bits:
  * `0`
  * `1`
* Quantum computers use quantum states/qubits, which can exist in a superposition of states.
* Examples of superposition:
  * Photon: superposition of horizontal and vertical polarization.
  * Electron: superposition of ground and excited states.

### Superposition

* Superposition means a quantum system can simultaneously contain multiple possible states before measurement.
* Superposition enables the idea of quantum parallelism.

### Interference

* Interference occurs when quantum amplitudes combine.
* Depending on their relative phases, amplitudes may:
  * Reinforce each other $\rightarrow$ constructive interference.
  * Cancel each other $\rightarrow$ destructive interference.
* Quantum algorithms use interference to:
  * Increase the probability/amplitude of correct answers.
  * Suppress incorrect answers.

### Quantum Measurement

* Measurement in quantum mechanics is generally probabilistic.

**Carefully designed quantum algorithms combine superposition and interference so that the desired result can sometimes be obtained with certainty or very high probability.**

### Quantum Computers vs Classical Computers

* Quantum computers should not be considered simply faster versions of classical computers.
* Quantum computers are unlikely to completely replace classical computers.
* Instead, future computing systems may use:

$$
\text{CPU} + \text{GPU} + \text{QPU}
$$

where QPU = Quantum Processing Unit.

* The CPU may:
  1. Analyze a computational problem.
  2. Perform classical parts of the computation.
  3. Send suitable sub-problems to the QPU.
* This is similar to how CPUs currently offload suitable tasks to GPUs.

**Quantum advantage does not simply come from doing classical operations faster. It comes from designing algorithms that exploit uniquely quantum effects such as superposition and interference.**

## Qubit and Unitaries

### Qubit State in Different Bases

**Computational Basis $(|0\rangle, |1\rangle)$**
$$
  |\psi\rangle = \alpha |0\rangle + \beta |1\rangle
$$

**Diagonal Basis $(|+\rangle, |-\rangle)$**
$$
  |\psi\rangle = |+\rangle \frac{\alpha+\beta}{\sqrt{2}} + |-\rangle \frac{\alpha-\beta}{\sqrt{2}}
$$

**Circular Basis $(|+i\rangle, |-i\rangle)$**
$$
  |\psi\rangle = |+i\rangle \frac{\alpha-i\beta}{\sqrt{2}} + |-i\rangle \frac{\alpha+i\beta}{\sqrt{2}}
$$

**Important Note:** All these expansions represent the same physical qubit state. Only the basis changes.

### Matrix Representation of Basis States

$$
  |0\rangle \equiv
  \begin{pmatrix}
  1 \\\\
  0
  \end{pmatrix},
  \qquad
  |1\rangle \equiv
  \begin{pmatrix}
  0 \\\\
  1
  \end{pmatrix}
$$

$$
  |+\rangle \equiv \frac{1}{\sqrt{2}}
  \begin{pmatrix}
  1 \\\\
  1
  \end{pmatrix},
  \qquad
  |-\rangle \equiv \frac{1}{\sqrt{2}}
  \begin{pmatrix}
  1 \\\\
  -1
  \end{pmatrix}
$$

$$
  |+i\rangle \equiv \frac{1}{\sqrt{2}}
  \begin{pmatrix}
  1 \\\\
  i
  \end{pmatrix},
  \qquad
  |-i\rangle \equiv \frac{1}{\sqrt{2}}
  \begin{pmatrix}
  1 \\\\
  -i
  \end{pmatrix}
$$

* We usually the $|0\rangle, |1\rangle$ basis as the computational basis, because classical computation uses 0s and 1s. 

### Bloch Sphere Interpretation

<img src="/images/qc/bloch-sphere.webp" width="350" height="350" style="background-color: #ffffff;">

Ref: https://en.wikipedia.org/wiki/Bloch_sphere

* A pure qubit state can be visualized on the surface of the Bloch sphere.
* Standard directions:
  * $|0\rangle$ corresponds to +z direction (north pole)
  * $|1\rangle$ corresponds to −z direction (south pole)
  * $|+\rangle, |-\rangle$ correspond to $\pm x$ directions
  * $|+i\rangle, |-i\rangle$ correspond to $\pm y$ directions
* A general pure state on the Bloch sphere is described by angles $\theta$ and $\phi$.

### Basic Single Qubit Operators

* Identity Operator
  $$
  I \equiv
  \begin{pmatrix}
  1 & 0\\\\
  0 & 1
  \end{pmatrix}
  $$

  $$
  I|\psi\rangle = |\psi\rangle
  $$

* Pauli Operators
  $$
  Z \equiv
  \begin{pmatrix}
  1 & 0\\\\
  0 & -1
  \end{pmatrix}
  $$

  $$
  X \equiv
  \begin{pmatrix}
  0 & 1\\\\
  1 & 0
  \end{pmatrix}
  $$

  $$
  Y \equiv
  \begin{pmatrix}
  0 & -i\\\\
  i & 0
  \end{pmatrix}
  $$

### Eigenkets and Eigenvalues of Pauli Operators

* For $Z$:
  $$
  Z|0\rangle = |0\rangle,
  \qquad
  Z|1\rangle = -|1\rangle
  $$

  * So $|0\rangle$ and $|1\rangle$ are eigenkets of $Z$
  * Their eigenvalues are $+1$ and $-1$

* For $X$:
  $$
  X|+\rangle = |+\rangle,
  \qquad
  X|-\rangle = -|-\rangle
  $$

  * So $|+\rangle$ and $|-\rangle$ are eigenkets of $X$

* For $Y$:
  $$
  Y|+i\rangle = |+i\rangle,
  \qquad
  Y|-i\rangle = -|-i\rangle
  $$

  * So $|+i\rangle$ and $|-i\rangle$ are eigenkets of $Y$

* General eigenvalue equation form:
  $$
  A|\lambda\rangle = \lambda |\lambda\rangle
  $$

  * Here:
    * $|\lambda\rangle$ = eigenket
    * $\lambda$ = eigenvalue

**Important Note:** An overall global phase is physically irrelevant, so states differing only by a global phase represent the same physical state. 

### Arbitrary Direction on the Bloch Sphere

* A unit vector $\hat e$ in spherical coordinates is:
  $$
  \hat e =
  \begin{pmatrix}
  \sin\theta \cos\phi \\\\
  \sin\theta \sin\phi \\\\
  \cos\theta
  \end{pmatrix}
  $$

* The Pauli operator along this direction is: $\hat e \cdot \vec{\sigma}$
  * Expansion:
    $$
    \hat e \cdot \vec{\sigma} = (\sin\theta \cos\phi)X + (\sin\theta \sin\phi)Y + (\cos\theta)Z
    $$

### Eigenvalue Equation in an Arbitrary Direction

* To find the basis states associated with direction $\hat e$, solve:
  $$
  (\hat e \cdot \vec{\sigma})|\,\rangle = \pm |\,\rangle
  $$

  * That means the states in direction $\hat e$ are the eigenkets of $\hat e \cdot \vec{\sigma}$ with eigenvalues $+1$ and $-1$.

### Eigenvectors of the Pauli Operator in an Arbitrary Direction

  $$
  \vec e\cdot\vec\sigma = \sin\theta\cos\phi\,X + \sin\theta\sin\phi\,Y + \cos\theta\,Z
  $$

  $$
    \vec e\cdot\vec\sigma
    =
    \sin\theta\cos\phi
    \begin{pmatrix}
    0&1\\\\
    1&0
    \end{pmatrix}
    +
    \sin\theta\sin\phi
    \begin{pmatrix}
    0&-i\\\\
    i&0
    \end{pmatrix}
    +
    \cos\theta
    \begin{pmatrix}
    1&0\\\\
    0&-1
    \end{pmatrix}
  $$

  $$
    \vec e\cdot\vec\sigma
    =
    \begin{pmatrix}
    \cos\theta &
    \sin\theta(\cos\phi-i\sin\phi)
    \\\\
    \sin\theta(\cos\phi+i\sin\phi) &
    -\cos\theta
    \end{pmatrix}
  $$

  Using Euler's relation,

  $$
    e^{i\phi}=\cos\phi+i\sin\phi
  $$

  $$
    e^{-i\phi}=\cos\phi-i\sin\phi
  $$

  we get

  $$
    \boxed{
    \vec e\cdot\vec\sigma
    =
    \begin{pmatrix}
    \cos\theta & e^{-i\phi}\sin\theta\\\\
    e^{i\phi}\sin\theta & -\cos\theta
    \end{pmatrix}
    }
  $$

  **Solving for the $+1$ eigenstate**

  Represent the unknown eigenstate as

  $$
    |\psi\rangle
    =
    \begin{pmatrix}
    \alpha\\\\
    \beta
    \end{pmatrix}
  $$

  For eigenvalue $\lambda=+1$ the eigenvalue equation becomes

  $$
    \begin{pmatrix}
    \cos\theta & e^{-i\phi}\sin\theta\\\\
    e^{i\phi}\sin\theta & -\cos\theta
    \end{pmatrix}
    \begin{pmatrix}
    \alpha\\\\
    \beta
    \end{pmatrix}
    =
    \begin{pmatrix}
    \alpha\\\\
    \beta
    \end{pmatrix}
  $$

  This produces two equations:

  $$
    \alpha\cos\theta
    +
    \beta e^{-i\phi}\sin\theta
    =
    \alpha
    \tag{1}
  $$

  $$
    \alpha e^{i\phi}\sin\theta
    -
    \beta\cos\theta
    =
    \beta
  $$

  **Simplifying equation (1)**

  Rearrange:

  $$
    \beta e^{-i\phi}\sin\theta
    =
    \alpha(1-\cos\theta)
  $$

  Use the identities $\sin\theta = 2\sin\frac{\theta}{2}\cos\frac{\theta}{2}$ and $1-\cos\theta = 2\sin^2\frac{\theta}{2}$

  Therefore,

  $$
    \beta e^{-i\phi}
    \left(
    2\sin\frac{\theta}{2}\cos\frac{\theta}{2}
    \right)
    =
    \alpha
    \left(
    2\sin^2\frac{\theta}{2}
    \right)
  $$

  Cancel the common terms:

  $$
    \beta e^{-i\phi}\cos\frac{\theta}{2}
    =
    \alpha\sin\frac{\theta}{2}
  $$

  A normalized solution is

  $$
    \boxed{
    \alpha=\cos\frac{\theta}{2}
    }
  $$

  $$
    \boxed{
    \beta=e^{i\phi}\sin\frac{\theta}{2}
    }
  $$

  Hence the eigenstate with eigenvalue $+1$ is

  $$
    \boxed{
    |\uparrow_{\vec e}\rangle
    =
    \begin{pmatrix}
    \cos\frac{\theta}{2}\\\\
    e^{i\phi}\sin\frac{\theta}{2}
    \end{pmatrix}
    }
  $$

  In ket notation,

  $$
    \boxed{
    |\uparrow_{\vec e}\rangle
    =
    \cos\frac{\theta}{2}|0\rangle
    +
    e^{i\phi}\sin\frac{\theta}{2}|1\rangle
    }
  $$

  This represents the qubit pointing in the $+\vec e$ direction on the Bloch sphere.

  Solving the same eigenvalue equation for $\lambda=-1$ gives

  $$
    \boxed{
    |\downarrow_{\vec e}\rangle
    =
    \begin{pmatrix}
    -e^{-i\phi}\sin\frac{\theta}{2}\\\\
    \cos\frac{\theta}{2}
    \end{pmatrix}
    }
  $$

  or

  $$
    \boxed{
    |\downarrow_{\vec e}\rangle
    =
    -e^{-i\phi}\sin\frac{\theta}{2}|0\rangle
    +
    \cos\frac{\theta}{2}|1\rangle
    }
  $$

  It corresponds to the direction opposite to $\vec e$, i.e. $-\vec e$.

  $\vec e$ and $-\vec e$ are mutually orthogonal:

  $$
    \boxed{
    \langle\uparrow_{\vec e}|\downarrow_{\vec e}\rangle=0
    }
  $$

  Therefore, $\lbrace |\uparrow_{\vec e}\rangle, |\downarrow_{\vec e}\rangle \rbrace$ forms an orthonormal basis.

  The two eigenstates span the complete single-qubit space:

  $$
    \boxed{
    |\uparrow_{\vec e}\rangle
    \langle\uparrow_{\vec e}|
    +
    |\downarrow_{\vec e}\rangle
    \langle\downarrow_{\vec e}|
    =
    I
    }
  $$

  Main result:

  $$
    \boxed{
    (\vec e\cdot\vec\sigma)
    |\uparrow_{\vec e}\rangle
    =
    +|\uparrow_{\vec e}\rangle
    }
  $$

  $$
    \boxed{
    (\vec e\cdot\vec\sigma)
    |\downarrow_{\vec e}\rangle
    =
    -|\downarrow_{\vec e}\rangle
    }
  $$

### Basis Transformations and Unitary Operators

* single-qubit bases:

  * Computational basis: $\{|0\rangle,|1\rangle\}$

  * $+/-$ basis: $|\pm\rangle = \frac{1}{\sqrt2}|0\rangle \pm \frac{1}{\sqrt2}|1\rangle$

  * $+i/-i$ basis: $|\pm i\rangle = \frac{1}{\sqrt2}|0\rangle \pm \frac{i}{\sqrt2}|1\rangle$

  * Arbitrary $\vec e$-basis:
    $$
      |\uparrow_{\vec e}\rangle = \cos\frac{\theta}{2}|0\rangle + e^{i\phi}\sin\frac{\theta}{2}|1\rangle
    $$

    $$
      |\downarrow_{\vec e}\rangle = -e^{-i\phi}\sin\frac{\theta}{2}|0\rangle + \cos\frac{\theta}{2}|1\rangle
    $$

* A generic qubit $|\psi\rangle=\alpha|0\rangle+\beta|1\rangle$ points in direction $\vec e$ when

  $$
    \alpha=\cos\frac{\theta}{2},
    \qquad
    \beta=e^{i\phi}\sin\frac{\theta}{2}
  $$

  up to an overall global phase.

#### Unitary Operator for Changing Basis

* A unitary operator can transform one orthonormal basis into another.
* If $\lbrace|b_k\rangle\rbrace \rightarrow \lbrace|a_k\rangle\rbrace$ then the unitary is
  $$
    \boxed{
    U=\sum_k |a_k\rangle\langle b_k|
    }
  $$
* Its action is $U|b_k\rangle=|a_k\rangle$.
* Intuition:
  * $\langle b_k|$ selects the old basis state.
  * $|a_k\rangle$ replaces it with the corresponding new basis state.

#### Computational Basis $\rightarrow$ $+/-$ Basis

* We want $|0\rangle\rightarrow|+\rangle$ and $|1\rangle\rightarrow|-\rangle$.

* Therefore, $U = |+\rangle\langle0| + |-\rangle\langle1|$

  $$
  U =
  \frac1{\sqrt2}
  \begin{pmatrix}
  1\\\\
  1
  \end{pmatrix}
  \begin{pmatrix}
  1&0
  \end{pmatrix} +
  \frac1{\sqrt2}
  \begin{pmatrix}
  1\\\\
  -1
  \end{pmatrix}
  \begin{pmatrix}
  0&1
  \end{pmatrix}
  $$

* Hence,
  $$
    \boxed{
    U=
    \frac1{\sqrt2}
    \begin{pmatrix}
    1&1\\\\
    1&-1
    \end{pmatrix}
    =H
    }
  $$
* This is the **Hadamard operator**.
* Important action:
  $$
    H|0\rangle=|+\rangle
  $$

  $$
    H|1\rangle=|-\rangle
  $$
* Therefore the Hadamard gate converts the computational basis into the $+/-$ basis and can create a superposition from $|0\rangle$.

#### Computational Basis $\rightarrow$ Arbitrary $\vec e$-Basis

* For an arbitrary direction $(\theta,\phi)$, define
  $$
    U(\theta,\phi) = |\uparrow_{\vec e}\rangle\langle0| + |\downarrow_{\vec e}\rangle\langle1|
  $$

  $$
    U(\theta,\phi) =
    \begin{pmatrix}
    \cos\frac{\theta}{2}\\\\
    e^{i\phi}\sin\frac{\theta}{2}
    \end{pmatrix}
    \begin{pmatrix}
    1&0
    \end{pmatrix} +
    \begin{pmatrix}
    -e^{-i\phi}\sin\frac{\theta}{2}\\\\
    \cos\frac{\theta}{2}
    \end{pmatrix}
    \begin{pmatrix}
    0&1
    \end{pmatrix}
  $$

  $$
    \boxed{
    U(\theta,\phi)=
    \begin{pmatrix}
    \cos\frac{\theta}{2}
    &
    -e^{-i\phi}\sin\frac{\theta}{2}
    \\\\[4pt]
    e^{i\phi}\sin\frac{\theta}{2}
    &
    \cos\frac{\theta}{2}
    \end{pmatrix}
    }
  $$
* Its action is
  $$
    U(\theta,\phi)|0\rangle = |\uparrow_{\vec e}\rangle
  $$

  $$
    U(\theta,\phi)|1\rangle = |\downarrow_{\vec e}\rangle
  $$

* So this unitary transforms the $0/1$ computational basis into the basis associated with an arbitrary direction $\vec e$ on the Bloch sphere.

### General Single-Qubit Unitary Operator

$$
  U(\theta,\phi) = |\uparrow_{\vec e}\rangle\langle 0| + |\downarrow_{\vec e}\rangle\langle 1|
$$

* This is not yet the most general single-qubit unitary, because an eigenvector can be multiplied by an arbitrary phase and still remain an eigenvector.
* From the eigenvector equation, $(\vec e\cdot\vec\sigma)|\psi\rangle = \lambda|\psi\rangle$ if $|\psi\rangle$ is an eigenvector, then $e^{i\gamma}|\psi\rangle$ is also an eigenvector with the same eigenvalue.
* Therefore, assign independent phases to the two eigenstates:
  $$
    e^{i\gamma_1}|\uparrow_{\vec e}\rangle
  $$

  and

  $$
    e^{i\gamma_2}|\downarrow_{\vec e}\rangle
  $$
* Hence the more general unitary is
  $$
    \boxed{
    U(\theta,\phi,\gamma_1,\gamma_2) =
    e^{i\gamma_1}
    |\uparrow_{\vec e}\rangle\langle0| +
    e^{i\gamma_2}
    |\downarrow_{\vec e}\rangle\langle1|
    }
  $$

  $$
    U(\theta,\phi,\gamma_1,\gamma_2) =
    \begin{pmatrix}
    e^{i\gamma_1}\cos\frac{\theta}{2}
    &
    -e^{i\gamma_2}e^{-i\phi}\sin\frac{\theta}{2}
    \\\\[4pt]
    e^{i\gamma_1}e^{i\phi}\sin\frac{\theta}{2}
    &
    e^{i\gamma_2}\cos\frac{\theta}{2}
    \end{pmatrix}
  $$
* Factor out $e^{i\gamma_1}$:
  $$
  U =
  e^{i\gamma_1}
  \begin{pmatrix}
  \cos\frac{\theta}{2}
  &
  -e^{i(\gamma_2-\gamma_1)}e^{-i\phi}
  \sin\frac{\theta}{2}
  \\\\[4pt]
  e^{i\phi}\sin\frac{\theta}{2}
  &
  e^{i(\gamma_2-\gamma_1)}
  \cos\frac{\theta}{2}
  \end{pmatrix}
  $$
* Define $\boxed{\lambda=\gamma_2-\gamma_1}$.
* $e^{i\gamma_1}$ is an overall **global phase**.
  * Global phase has no physical significance, so it can be ignored.
* Only the **relative phase** $\lambda=\gamma_2-\gamma_1$ matters physically.
* So the general unitary can be parametrized using only $\boxed{\theta,\phi,\lambda}$ rather than four independent parameters.
* Ignoring the global phase,
  $$
  \boxed{
  U(\theta,\phi,\lambda) =
  \begin{pmatrix}
  \cos\frac{\theta}{2}
  &
  -e^{-i(\phi-\lambda)}
  \sin\frac{\theta}{2}
  \\\\[4pt]
  e^{i\phi}\sin\frac{\theta}{2}
  &
  e^{i\lambda}\cos\frac{\theta}{2}
  \end{pmatrix}
  }
  $$

#### Recovering the Hadamard Gate

$$
  H=
  \frac{1}{\sqrt2}
  \begin{pmatrix}
  1&1\\\\
  1&-1
  \end{pmatrix}
$$

* It maps $|0\rangle\rightarrow|+\rangle$ and $|1\rangle\rightarrow|-\rangle$.
* The $+/-$ basis corresponds to the $+x/-x$ direction on the Bloch sphere.
* Therefore choose $\boxed{\theta=\frac{\pi}{2},\phi=0}$ because the $+x$ direction lies on the equator.
* For the spin-up state,
  $$
    e^{i\gamma_1}|\uparrow_{\vec e}\rangle=
    e^{i\gamma_1}
    \frac{1}{\sqrt2}
    \begin{pmatrix}
    1\\\\
    1
    \end{pmatrix}
  $$
* To match
  $$
    |+\rangle=
    \frac1{\sqrt2}
    \begin{pmatrix}
    1\\\\
    1
    \end{pmatrix}
  $$
  choose $\boxed{\gamma_1=0}$.
* For the spin-down state,
  $$
    |\downarrow_{\vec e}\rangle=
    \frac1{\sqrt2}
    \begin{pmatrix}
    -1\\\\
    1
    \end{pmatrix}
  $$
* But the desired state is
  $$
    |-\rangle=
    \frac1{\sqrt2}
    \begin{pmatrix}
    1\\\\
    -1
    \end{pmatrix}
  $$
* These differ by a phase of $-1$: $-1=e^{i\pi}$.
* Therefore, $\boxed{\gamma_2=\pi}$.
* Hence, $\lambda = \gamma_2-\gamma_1 = \pi$.

$$
  \boxed{
  U\left(\frac{\pi}{2},0,\pi\right)=H
  }
$$

* Main idea: Hadamard is one particular choice of parameters of a general single-qubit unitary operator.

## References

1. Course | Quantum Talent LMS. (n.d.). https://qutalent.org/en/courses/introduction-to-quantum-computing/ Lecture 1 & 2
