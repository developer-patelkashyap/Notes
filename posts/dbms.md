---
title: DBMS - Database Management System
category: Computer Science
---

## Entity Relationship Model

> **Data:** Any fact that can be recorded.

> **Database:** Collection of related data.

> **DBMS:** Set of programs used to define, construct and manipulate database.

$$
DB + DBMS \rightarrow DBS
$$

**Database design proceeds as:**

$$
\text{High Level or Conceptual Model}
$$

$$
\downarrow
$$

$$
\text{Representational or Implementation Model}
$$

$$
\downarrow
$$

$$
\text{Low Level or Physical Data Models}
$$

> **ER Model:** It is used to represent the diagrammatic design (HL design of DB).

### Main Components in ER Diagram

> **1. Entity:** An entity is a thing that has an independent existence.

> **2. Relationship:** It is an association among several entities.

> **3. Attributes:** Attributes are characteristics or properties that describe entities or relationships.

### Entity Types

> **1. Strong Entity:** An entity that can exist independently of other entities.
* Has a unique attribute known as primary key.
* The primary key identifies each instance of the entity.
* Examples:
  * Student
  * Employee
  * Product

> **2. Weak Entity:** An entity that cannot exist independently and relies on a strong entity to define its identity.
* Associated with a strong entity, often through a partial key.
* Example:
  * Dependent exists in relation to an Employee entity.

![](/images/dbms/entity-types.png)

### Attribute Types

| Type                      | Definition                                                                | Example                                   |
| ------------------------- | ------------------------------------------------------------------------- | ------------------------------------------|
| **Simple Attribute**      | A single, indivisible attribute                                           | Age                                       |
| **Key Attribute**         | Uniquely identifies an entity in the entity set                           | StudentID                                 |
| **Multivalued Attribute** | Can have multiple values for a single entity                              | Phone Numbers                             |
| **Composite Attribute**   | Made up of multiple components, each representing a part of the attribute | Address $\rightarrow$ Street, City, State |
| **Derived Attribute**     | Calculated or derived from other attributes                               | Age derived from DOB                      |

![](/images/dbms/attribute-types.png)

### Degree of a Relationship Set

The degree of a relationship depends on the number of entity sets participating in the relationship.

| Relationship | Number of Entity Sets | Description                      |
| ------------ | --------------------- | -------------------------------- |
| Unary        |                     1 | Only one entity set participates |
| Binary       |                     2 | Two entity sets participate      |
| Ternary      |                     3 | Three entity sets participate    |
| N-ary        |                   $n$ | $n$ entity sets participate      |

![](/images/dbms/degree.png)

### Cardinality Constraints of Relationship Set

> **1. One-to-One:** Each instance of an entity is associated with at most one instance of another entity, and vice versa.

> **2. One-to-Many:** One instance of an entity is associated with multiple instances of another entity, but the reverse is not true.

> **3. Many-to-One:** Similar to a one-to-many relationship but viewed from the opposite perspective.

> **4. Many-to-Many:** Each instance of an entity can relate to multiple instances of another entity and vice versa.

![](/images/dbms/cardinality-constraints.png)

### Identifying Relationship

> **Identifying Relationship:** A relationship type in which a weak entity relies on a strong entity for its existence and identity.
* The weak entity cannot be uniquely identified on its own.
* It lacks a primary key.

![](/images/dbms/identifying-relationship.png)

### Participation Constraints

> **1. Total Participation:** Every instance of the entity must participate in the relationship.

> **2. Partial Participation:** Some instances of the entity may or may not participate in the relationship.

![](/images/dbms/participation-constraints.png)

### Min-Max Representation

The general notation is:

$$
(min,\ max)
$$

It specifies the minimum and maximum number of relationship instances in which an entity can participate.

![](/images/dbms/min-max.png)

## Relational Model

> **Relational Database Model:** A method of structuring data using tables or relations consisting of rows and columns.

| Term                   | Meaning                                                                             |
| ---------------------- | ----------------------------------------------------------------------------------- |
| **Relation**           | Table                                                                               |
| **Tuple**              | Single row in a relation                                                            |
| **Attribute**          | Column in a relation                                                                |
| **Domain**             | Set of permissible values that an attribute can hold                                |
| **Relation Schema**    | Structure of a relation including its name, attributes and their respective domains |
| **Degree of Relation** | Number of attributes in the relation                                                |
| **Relation State**     | Actual set of tuples present in a relation at a particular point in time            |

**Example of Relation Schema:**

```text
Student(
    StudentID : Integer,
    Name      : String,
    Age       : Integer,
    Major     : String
)
```

$
Degree(Student) = 4
$

### Tuple, Tuple Value and NULL

> **Tuple:** A single row or record in a table.

Example:

| StudentID | Name | Age |
| --------- | ---- | --: |
| 101       | Amit |  20 |

The complete row is one tuple.

> **Tuple Value:** The specific value for each attribute in a tuple corresponding to the data contained in each column of the row.

Example:
```text
Tuple = (101, Amit, 20)
```

> **NULL:** Represents a missing, unknown or inapplicable value in a relational database.
* It represents the absence of a value for an attribute in a specific tuple.

### Relational Constraints

> **Relational Constraints:** Rules that ensure data consistency and integrity.

Every transaction should:

```text
Valid DB State -> Transaction -> Valid DB State
```

Constraints prevent illegal values from entering the database.

#### Types of Relational Constraints

> **1. Domain Constraint:** Specifies the permissible values for each attribute in a relation based on its data type and value range.

Example:

```text
Age : Integer
```

A string value such as `"Twenty"` would violate the domain if only integers are permitted.

> **2. Key Constraints:** Maintain uniqueness by ensuring that there are no duplicate rows in a table and that each tuple is distinct.

> **3. Entity Integrity:** No attribute in a primary key can have a `NULL` value because every tuple must have a unique and complete identifier.

$$
Primary\ Key \neq NULL
$$

> **4. Referential Integrity:** Ensures that a foreign key in one relation matches a primary key in another relation, establishing valid relationships between tables.

```text
Foreign Key -> Primary Key of another table
```

### Key

> **Key:** An attribute that uniquely identifies a row in a relation.

> **Superkey:** Any combination of attributes that can uniquely identify a tuple in a relation.
* Can contain one or more attributes.
* May contain unnecessary additional attributes.

Example:

Suppose:

```text
Student(StudentID, Name, Age)
```

If `StudentID` uniquely identifies a student, possible superkeys include:

```text
{StudentID}
{StudentID, Name}
{StudentID, Age}
{StudentID, Name, Age}
```

> **Candidate Key:** A minimal superkey having the minimum number of attributes necessary to uniquely identify a tuple.
* A relation can have one or more candidate keys.
* No unnecessary attribute is present in a candidate key.

> **Primary Key:** A candidate key chosen by the database designer as the main identifier for tuples in a table.
* Chosen from candidate keys.
* Cannot contain `NULL` values.

#### Relationship Between Superkey, Candidate Key and Primary Key

$$
Primary\ Key \subseteq Candidate\ Keys \subseteq Superkeys
$$

> **Alternate Keys:** Candidate keys that are not chosen as the primary key.

> **Foreign Key:** An attribute or set of attributes in one table that references the primary key of another table.

Example:

```text
Student Details
| ID | Name | Course |
| -- | ---- | ------ |

Student Marks
| ID | Marks |
| -- | ----- |

Here: Student Marks.ID -> Student Details.ID
```

> **Composite Key:** A key consisting of two or more attributes that together uniquely identify a row.

#### Summary

| Key               | Meaning                                            |
| ----------------- | -------------------------------------------------- |
| **Superkey**      | Any set of attributes uniquely identifying a tuple |
| **Candidate Key** | Minimal superkey                                   |
| **Primary Key**   | Candidate key selected as main identifier          |
| **Alternate Key** | Candidate key not selected as primary key          |
| **Foreign Key**   | References primary key of another table            |
| **Composite Key** | Key consisting of two or more attributes           |

### Actions Upon Constraint Violations

#### Insertion

If any constraint fails during insertion, reject the insertion completely.

#### Deletion

Deletion may violate referential integrity.

Approaches:

| Action       | Meaning                                                     |
| ------------ | ----------------------------------------------------------- |
| **Reject**   | Refuse the deletion                                         |
| **Cascade**  | Delete all related records referencing the deleted row      |
| **Set NULL** | Set foreign-key columns to `NULL` to break the relationship |

#### Update

Combination of Delete and Insert.

### Conversion of ER Model to Relational Model

#### Strong Entity

![](/images/dbms/rm-strong-entity-1.JPG)

![](/images/dbms/rm-strong-entity-2.JPG)

#### Relationship

![](/images/dbms/rm-1-1.JPG)

![](/images/dbms/rm-1-1-tp.JPG)

![](/images/dbms/rm-1-n.JPG)

![](/images/dbms/rm-1-n-tp.JPG)

![](/images/dbms/rm-m-n.JPG)

#### Weak Entity

![](/images/dbms/rm-weak-entity.JPG)

#### Ternary Relationship

*Example from Elmasri/Navathe:*
![](/images/dbms/ternary.png)

#### Aggregation

![](/images/dbms/aggregation.JPG)

## Normalization

### Functional Dependency (FD)

> **Functional Dependency (FD):** A concept that represents a relationship between attributes within a relation.

* A functional dependency exists when one attribute uniquely determines another attribute.
* If knowing the value of attribute $A$ uniquely determines the value of another attribute $B$, then:

$$
A \rightarrow B
$$

This means $B$ is functionally dependent on $A$.

**Example:**

```
|---------|------|-----------|---------------|
| roll_no | name | dept_name | dept_building |
|---------|------|-----------|---------------|
```

| Valid FD                                                            | Reason                                            |
| ------------------------------------------------------------------- | ------------------------------------------------- |
| $roll\_no \rightarrow \{name,\;dept\_name,\;dept\_building\}$     | Each roll number identifies one complete tuple.   |
| $roll\_no \rightarrow dept\_name$                                 | One roll number determines one department.        |
| $dept\_name \rightarrow dept\_building$                           | Each department determines one building.          |
| $roll\_no \rightarrow name$                                       | One roll number determines one name.              |
| $\{roll\_no,\;name\} \rightarrow \{dept\_name,\;dept\_building\}$ | The attribute set uniquely determines the values. |

| Invalid FD                                | Reason                                                |
| ----------------------------------------- | ----------------------------------------------------- |
| $name \rightarrow dept\_name$           | The same name can occur with different departments.   |
| $dept\_building \rightarrow dept\_name$ | More than one department can be in the same building. |


### Types of Functional Dependency

> **1. Trivial FD:** A dependency where the dependent is a subset of the determinant.

For $X \rightarrow Y$ the FD is trivial when $Y \subseteq X$.

Example:

$$
  \{roll\_no, name\} \rightarrow name
$$

> **2. Non-Trivial FD:** A dependency where the dependent is not a subset of the determinant.

$$
  X \cap Y = \emptyset
$$

Example:

$$
  \{roll\_no, name\} \rightarrow age
$$

> **3. Semi Non-Trivial Functional Dependency**

Example: $AB \rightarrow BC$ here $X \cap Y \neq \emptyset$ because $B$ appears on both sides.

### FD Inference Rules / Armstrong's Axioms

| Rule | Statement |
|---|---|
| **1. Reflexive** | If $X \supseteq Y$, then $X \rightarrow Y$ |
| **2. Transitivity** | If $X \rightarrow Y$ and $Y \rightarrow Z$, then $X \rightarrow Z$ |
| **3. Argumentation** | If $X \rightarrow Y$, then $XZ \rightarrow YZ$ |
| **4. Splitting / Decomposition** | If $X \rightarrow YZ$, then $X \rightarrow Y$ and $X \rightarrow Z$ |
| **5. Union** | If $X \rightarrow Y$ and $X \rightarrow Z$, then $X \rightarrow YZ$ |
| **6. Pseudo Transitivity** | If $X \rightarrow Y$ and $YW \rightarrow Z$, then $XW \rightarrow Z$ |
| **7. Composition** | If $A \rightarrow B$ and $C \rightarrow D$, then $AC \rightarrow BD$ |

**Note:** $X$, $Y$, $Z$, $W$, $A$, $B$, $C$, $D$ can each represent a single attribute or a set of attributes.

### Attribute Closure

> **Attribute Closure:** The closure of an attribute set is the set of attributes that can be functionally determined from it.

**Example:**

Given FDs $A \rightarrow B$, $B \rightarrow D$, $C \rightarrow DE$, $CD \rightarrow AB$.

Closures:
* $A^+ = \{A,B,D\}$
* $B^+ = \{B,D\}$
* $C^+ = \{C,D,E,A,B\}$
* $(CD)^+ = \{C,D,E,A,B\}$
* $(AD)^+ = \{A,D,B\}$

### Determining Candidate Keys

#### Number of Possible Candidate-Key Attribute Sets

* For attributes $(A,B)$: $A$, $B$, $AB$
* For attributes $(A,B,C)$: $A$, $B$, $C$, $AB$, $BC$, $AC$, $ABC$
* For $n$ attributes, the number of non-empty attribute combinations is: $2^n - 1$

#### Example Finding Candidate Key

Given $R(A,B,C,D,E,H)$ and FDs $A \rightarrow B$, $BC \rightarrow D$, $E \rightarrow C$, $D \rightarrow A$.

Closures:

$$
  (EH)^+ = \{E,H,C\}
$$

$$
  (AEH)^+ = \{A,E,H,B,C,D\}
$$

$$
  (BEH)^+ = \{B,E,H,C,D,A\}
$$

$$
  (DEH)^+ = \{D,E,H,A,C,B\}
$$

Hence the candidate keys are $AEH,\ BEH,\ DEH$.

#### Example Finding Candidate Key for a Sub-Relation

Given $R(A,B,C,D,E)$ and FDs $A \rightarrow BC$, $CD \rightarrow E$, $B \rightarrow D$, $E \rightarrow A$. Find candidate keys for $R'(A,B,C,E)$.

Closures:

$$
  A^+ = \{A,B,C,D,E\}
$$

$$
  B^+ = \{B,D\}
$$

$$
  C^+ = \{C\}
$$

$$
  E^+ = \{E,A,B,C,D\}
$$

$$
  (BC)^+ = \{B,C,D,E,A\}
$$

Therefore candidate keys are $A, E, BC$.

### Equivalence of FD Sets

> If $FD_2 \supseteq FD_1$ and $FD_1 \supseteq FD_2$ then $FD_1 \equiv FD_2$.

**Example:**

Given $F=\lbrace A \rightarrow B,\ B \rightarrow C,\ C \rightarrow A \rbrace$ and $G=\lbrace A \rightarrow BC,\ B \rightarrow A,\ C \rightarrow A \rbrace$.

For both sets:

$$
  A^+ = \{A,B,C\}
$$

$$
  B^+ = \{B,C,A\}
$$

$$
  C^+ = \{C,A,B\}
$$

Therefore $F \supseteq G$ and $G \supseteq F$ Hence $F \equiv G$.

### Minimization of FD Set (Canonical Cover)

> **Canonical Cover:** A minimal equivalent set of functional dependencies with no redundant dependencies.

**Important Note:** Minimization is not unique.

#### Steps to Find the Canonical Cover

| Step | Description |
|---|---|
| **1. Reduction** | Convert FDs having multiple attributes on the right-hand side into FDs with a single RHS attribute |
| **2. Elimination** | An attribute is extraneous if its removal does not change the closure of the FD set |
| **3. Minimization** | Check whether the remaining FDs can still imply the dependency |

**Example:**

Given $F=\lbrace A \rightarrow BC, CD \rightarrow E, B \rightarrow D, E \rightarrow A \rbrace$.

1. Reduction:
   * $A \to BC$ becomes $A \to B$ and $A \to C$
   * Result: $F=\lbrace A \rightarrow B, A \rightarrow C, CD \rightarrow E, B \rightarrow D, E \rightarrow A \rbrace$
2. Elimination:
   * Only $CD\to E$ has multiple attributes on the LHS.
   * Check $C$:
     * $D^+=\{D\}$
     * $E\notin D^+$
     * Therefore, $C$ is not extraneous.
   * Check $D$:
     * $C^+=\{C\}$
     * $E\notin C^+$
     * Therefore, $D$ is not extraneous.
   * Result: $F=\lbrace A \rightarrow B, A \rightarrow C, CD \rightarrow E, B \rightarrow D, E \rightarrow A \rbrace$
3. Minimization:
   * None of the FDs can be derived after removing it.

Minimal Cover = $\lbrace A \rightarrow B, A \rightarrow C, CD \rightarrow E, B \rightarrow D, E \rightarrow A \rbrace$

Ref: https://www.geeksforgeeks.org/dbms/canonical-cover-of-functional-dependencies-in-dbms/

### Normalization

> **Normalization:** The process of organizing data to minimize redundancy and improve data integrity.

* Each normal form applies rules to reduce redundancy progressively.
* Each higher normal form improves data organization.

#### Why Normalization is Needed

* Reduce Redundancy: Avoid repeated data.
* Maintain Integrity: Keep data consistent and accurate.
* Prevent Anomalies:
  * Insertion: Cannot add data independently.
  * Update: Repeated values may become inconsistent.
  * Deletion: Deleting a row may remove useful data.
* Simplify Maintenance: Keep tables smaller and well-structured.

#### First Normal Form - 1NF

> **1NF:** A table is in First Normal Form if it contains only atomic attributes.

* no multivalued attributes
* no composite attributes

#### Second Normal Form - 2NF

> **2NF:** A table is in 2NF if it is in 1NF and has no partial dependencies.

> **Partial Dependency:** A non-key attribute depends on only part of a composite primary key.

*Example:*

Given $R(A,B,C,D,E,F,G,H,I,J)$, and FDs $AB \rightarrow C$, $BD \rightarrow EF$, $AD \rightarrow GH$, $A \rightarrow I$, $H \rightarrow J$.

Candidate key: $ABD$

Partial dependencies:
1. $AB \rightarrow C$
2. $BD \rightarrow EF$
3. $AD \rightarrow GH$
4. $A \rightarrow I$

Closures:
* $(AB)^+ = \{A,B,C\}$
* $(BD)^+ = \{B,D,E,F\}$
* $(AD)^+ = \{A,D,G,H\}$
* $A^+ = \{A,I\}$

Decomposition:
1. $R_1(A,B,C)$
2. $R_2(B,D,E,F)$
3. $R_3(A,D,G,H)$
4. $R_4(A,I)$
5. $R_5(A,B,D)$
6. $R_6(H,J)$

#### Third Normal Form - 3NF

> **3NF:** A table is in 3NF if it is in 2NF and has no transitive dependencies where non-key attributes depend on other non-key attributes.

*Example:*

Given $R(A,B,C,D,E)$ and FDs $AB \rightarrow C$, $B \rightarrow D$, $D \rightarrow E$.

Candidate key: $AB$

Partial dependency: $B \rightarrow D$

Transitive dependency: $D \rightarrow E$ ($B \rightarrow D \rightarrow E$)

2NF Decomposition:
1. $R_1(A,B,C)$
2. $R_2(B,D,E)$

3NF Decomposition:
1. $R_1(A,B,C)$
2. $R_2(B,D)$
3. $R_3(D,E)$

#### Boyce-Codd Normal Form - BCNF

> **BCNF:** A stricter version of 3NF where every non-trivial functional dependency must have a superkey on the left-hand side.

*Example:*

Given $R(A,B,C,D,E,F,G,H,I,J)$ and FDs $AB \rightarrow C$, $A \rightarrow DE$, $B \rightarrow F$, $F \rightarrow GH$, $D \rightarrow IJ$.

Candidate key: $AB$

Partial dependencies:
1. $A \rightarrow DE$
2. $B \rightarrow F$

Transitive dependencies:
1. $F \rightarrow GH$
2. $D \rightarrow IJ$

2NF Decomposition:
1. $R_1(A,B,C)$
2. $R_2(A,D,E,I,J)$
3. $R_3(B,F,G,H)$

3NF Decomposition:
1. $R_1(A,B,C)$
2. $R_4(A,D,E)$
3. $R_5(D,I,J)$
4. $R_6(B,F)$
5. $R_7(F,G,H)$

Relevant determinants $AB$, $A$, $D$, $B$ and $F$ are superkeys of their respective decomposed relations.

### Lossless Decomposition

> **Lossless Decomposition:** The process of breaking a relation $R$ into smaller relations $R_1$ and $R_2$ such that the original relation can be perfectly reconstructed by performing a natural join of $R_1$ and $R_2$.

A lossless decomposition ensures:
* no extra tuples are generated
* the original data can be reconstructed
* data integrity is maintained

A binary decomposition is lossless if at least one of the following holds:
* $R_1 \cap R_2 \rightarrow R_1$ or 
* $R_1 \cap R_2 \rightarrow R_2$

That is, the attributes common to $R_1$ and $R_2$ must determine all attributes of at least one decomposed relation.

#### Lossless vs Lossy

```text
Original Relation R
        |
        -> Decompose into R1 and R2
        |
        -> Natural Join R1 and R2
               |
               -> Exactly R -> Lossless
               -> Extra tuples -> Lossy
```

### FD Preserving Decomposition

> A decomposition $D=\{R_1,R_2,\ldots,R_n\}$ of a relation $R$ with a set of FDs $F$ is dependency preserving if the combined FDs of the decomposed relations have the same closure as $F$.

If $F_i$ is the set of FDs applicable to $R_i$, then:

$$
  (F_1 \cup F_2 \cup \cdots \cup F_n)^+ = F^+
$$

#### Cases of Dependency Preservation

| Case | Condition | Result |
|---|---|---|
| **Case 1** | $F_1 \cup F_2 = F$ | Dependency preserving |
| **Case 2** | $F_1 \cup F_2 \subset F$ | Not dependency preserving |
| **Case 3** | $F_1 \cup F_2 \supset F$ | Not possible |

**Example:**

Given $R(A,B,C,D,E,G)$, $F=\lbrace AB \rightarrow C,\ AC \rightarrow B,\ AD \rightarrow E,\ B \rightarrow D,\ BC \rightarrow A,\ E \rightarrow G \rbrace$ and Decomposition: $R_1(A,B,C)$, $R_2(A,B,D,E)$, $R_3(E,G)$.

Projected FDs:

1. In $R_1(A,B,C)$
   1. $AB \rightarrow C$
   2. $AC \rightarrow B$
   3. $BC \rightarrow A$
2. In $R_2(A,B,D,E)$
   1. $AD \rightarrow E$
   2. $B \rightarrow D$
3. In $R_3(E,G)$
   1. $E \rightarrow G$

Therefore the decomposition is FD preserving.

## Formal Query Language and SQL

* Used to express queries over relational databases.
* Main formal approaches:
  * Relational Algebra (RA): specifies *how* to obtain the result through operations.
  * Relational Calculus: specifies *what* result is required using logical conditions.
    * Tuple Relational Calculus (TRC)
    * Domain Relational Calculus (DRC)

### Relational Algebra

* A procedural query language for the relational model.
* A query is represented as a sequence or composition of operations on relations.
* Each operation produces another relation as output.

#### Basic Operators
1. Selection
   * Selects tuples satisfying a condition.
   * Symbol: $\sigma$
   * General form: $\sigma_{\text{condition}}(R)$
2. Projection
   * Selects specified attributes from a relation.
   * Removes duplicate tuples from the result.
   * Symbol: $\pi$
   * General form: $\pi_{A_1,A_2,\ldots,A_n}(R)$
3. Rename
   * Renames a relation or its attributes.
   * Symbol: $\rho$
   * General forms: $\rho_{S(B_1,B_2,\ldots,B_n)}(R)$

#### Set Operations
* Require union-compatible relations:
  * Same number of attributes.
  * Corresponding attributes have compatible domains.

1. Union
   * Returns all unique tuples occurring in either relation.
   * Symbol: $\cup$
   * General form: $R \cup S$
2. Intersection
   * Returns tuples common to both relations.
   * Symbol: $\cap$
   * General form: $R \cap S$
3. Set Difference
   * Returns tuples present in the first relation but not in the second.
   * Symbol: $-$
   * General form: $R-S$

#### Cartesian Product

* Combines every tuple of one relation with every tuple of another relation.
* Symbol: $\times$
* General form: $R \times S$
* If $|R|=m,\; |S|=n$ then $|R\times S|=mn$.
* Degree of the result $deg(R\times S)=deg(R)+deg(S)$.

#### Join

* Combines tuples from two relations based on a related condition.
* Can be viewed as: $\text{Join} = \text{Cross Product} + \text{Selection}$
* General form: $R\bowtie_{\text{condition}}S$

##### Types of Join

1. Inner Join
   * Returns only tuples that satisfy the join condition.
   * General form: $R \bowtie_{\theta} S$
2. Outer Joins
   * Preserve unmatched tuples along with matched tuples.
   * Left Outer Join
     * Keeps all tuples of the left relation.
     * General form: $R \;⟕_{\theta}\; S$
   * Right Outer Join
     * Keeps all tuples of the right relation.
     * General form: $R \;⟖_{\theta}\; S$
   * Full Outer Join
     * Keeps all tuples from both relations.
     * General form: $R \;⟗_{\theta}\; S$
3. Self Join
   * A relation is joined with itself.
   * Requires renaming to distinguish the two copies.
   * General form: $\rho_{R_1}(R) \bowtie_{\theta} \rho_{R_2}(R)$
4. Equi Join
   * A join whose condition uses only equality.
   * General form: $R \bowtie_{R.A=S.B} S$
5. Theta Join
   * Join condition may use: $=,\;<,\;>,\;\leq,\;\geq,\;\neq$
   * General form: $R \bowtie_{\theta} S$
6. Natural Join
   * Automatically joins on common attributes with the same name.
   * Removes duplicate copies of common join attributes.
   * General form: $R \ast S$
7. Semi Join
   * Returns tuples from one relation that have a matching tuple in the other relation.
8. Semi Difference / Anti Join
   * Returns tuples from one relation that have no matching tuple in the other relation.

#### Division

* Represents a for all type of query.
* Symbol: $\div$
* If $R(A,B)\div S(B)$ the result contains values of $A$ associated with every value of $B$ present in $S$.

#### Aggregate Functions

* Used to summarize relation values.
* Common functions: `SUM`, `AVG`, `MAX`, `MIN`, `COUNT`
* Extended relational algebra uses the aggregate/grouping operator:

$$
  {}_{\text{grouping-attributes}}
  \mathcal{F}_{\text{function-list}}(r)
$$

### Tuple Relational Calculus

* A declarative formal query language.
* Specifies what tuples are required, not how to retrieve them.
* Does not specify an explicit sequence of operations.
* General syntax: $\{t\mid P(t)\}$
  * $t$: tuple variable representing a complete tuple.
  * $P(t)$: predicate that $t$ must satisfy.
* More explicit form: $\{\,t \mid t\in R \land P(t)\,\}$
* Attribute access: $t.A$
  * Refers to attribute $A$ of tuple $t$.
* Logical Connectives: $ \land\;(\text{AND}), \lor\;(\text{OR}), \neg\;(\text{NOT}), \rightarrow\;(\text{Implication})$
* Quantifiers
  * Existential: $\exists t\in R\;(P(t))$
  * Universal: $\forall t\in R\;(P(t))$
* Quantifier Equivalences
  * $\forall x\,P(x)\equiv\neg\exists x\,\neg P(x)$
  * $\exists x\,P(x)\equiv\neg\forall x\,\neg P(x)$
* Variables
  * Free variable: contributes to the query result.
  * Bound variable: occurs within the scope of a quantifier.
  * Example: $\{\,t \mid t \in R \land \exists s \in S\;(t.A=s.A)\,\}$
    * $t$ is a free variable.
      * Its value appears in the query result.
    * $s$ is a bound variable.
      * It is used only to test the condition.

### Domain Relational Calculus

* A declarative formal query language similar to TRC.
* Uses domain variables representing individual attribute values.
* General form: $\{\langle d_1,d_2,\ldots,d_n\rangle \mid P(d_1,d_2,\ldots,d_n)\}$
  * $d_1,d_2,\ldots,d_n$: domain variables.
  * $P$: predicate specifying conditions on those variables.
* Relation Membership form: For a relation $R(A_1,A_2,\ldots,A_n)$ membership can be written as $R(d_1,d_2,\ldots,d_n)$.
* Logical Connectives: $\land, \lor, \neg, \rightarrow$
* Quantifiers: $\exists d, \forall d$

### RA vs TRC vs DRC

1. **Selection**
   * Relation: $R(A,B)$

| Language | Expression                                                             |
| -------- | ---------------------------------------------------------------------- |
| **RA**   | $\sigma_{B=17}(R)$                                                     |
| **TRC**  | $\{\,t \mid t\in R \land t.B=17\,\}$                                   |
| **DRC**  | $\{\,\langle a,b\rangle \mid \langle a,b\rangle\in R \land b=17\,\}$   |

2. **Projection**
   * Relation: $R(A,B)$

| Language | Expression                                                             |
| -------- | ---------------------------------------------------------------------- |
| **RA**   | $\pi_A(R)$                                                             |
| **TRC**  | $\{\,t \mid \exists p\in R\;(t.A=p.A)\,\}$                             |
| **DRC**  | $\{\,\langle a\rangle \mid \exists b\;(\langle a,b\rangle\in R)\,\}$   |

3. **Selection + Projection**
   * Relation: $R(A,B)$

| Language | Expression                                                                        |
| -------- | --------------------------------------------------------------------------------- |
| **RA**   | $\pi_A(\sigma_{B=17}(R))$                                                         |
| **TRC**  | $\{\,t \mid \exists p\in R\;(t.A=p.A \land p.B=17)\,\}$                           |
| **DRC**  | $\{\,\langle a\rangle \mid \exists b\;(\langle a,b\rangle\in R \land b=17)\,\}$   |

4. **Union**
   * Relations: $R(A,B,C)$, $S(A,B,C)$

| Language | Expression                                                                                     |
| -------- | ---------------------------------------------------------------------------------------------- |
| **RA**   | $R\cup S$                                                                                      |
| **TRC**  | $\{\,t \mid t\in R \lor t\in S\,\}$                                                            |
| **DRC**  | $\{\,\langle a,b,c\rangle \mid \langle a,b,c\rangle\in R \lor \langle a,b,c\rangle\in S\,\}$   |

5. **Set Difference**
   * Relations: $R(A,B,C)$, $S(A,B,C)$

| Language | Expression                                                                                         |
| -------- | -------------------------------------------------------------------------------------------------- |
| **RA**   | $R-S$                                                                                              |
| **TRC**  | $\{\,t \mid t\in R \land t\notin S\,\}$                                                            |
| **DRC**  | $\{\,\langle a,b,c\rangle \mid \langle a,b,c\rangle\in R \land \langle a,b,c\rangle\notin S\,\}$   |

6. **Intersection**
   * Relations: $R(A,B,C)$, $S(A,B,C)$

| Language | Expression                                                                                      |
| -------- | ----------------------------------------------------------------------------------------------- |
| **RA**   | $R\cap S$                                                                                       |
| **TRC**  | $\{\,t \mid t\in R \land t\in S\,\}$                                                            |
| **DRC**  | $\{\,\langle a,b,c\rangle \mid \langle a,b,c\rangle\in R \land \langle a,b,c\rangle\in S\,\}$   |

7. **Cartesian / Cross Product**
   * Relations: $R(A,B)$, $S(C,D)$

| Language | Expression                                                                                             |
| -------- | ------------------------------------------------------------------------------------------------------ |
| **RA**   | $R\times S$                                                                                            |
| **TRC**  | $\{\,t \mid \exists p\in R\;\exists q\in S\;(t.A=p.A \land t.B=p.B \land t.C=q.C \land t.D=q.D)\,\}$   |
| **DRC**  | $\{\,\langle a,b,c,d\rangle \mid \langle a,b\rangle\in R \land \langle c,d\rangle\in S\,\}$            |

8. **Natural Join**
   * Relations: $R(A,B,C,D)$, $S(B,D,E)$
   * Common attributes: $B,D$

| Language | Expression                                                                                                                                       |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **RA**   | $R\ast S$                                                                                                                                        |
| **TRC**  | $\{\,t \mid \exists p\in R\;\exists q\in S\;(t.A=p.A \land t.B=p.B \land t.C=p.C \land t.D=p.D \land t.E=q.E \land p.B=q.B \land p.D=q.D)\,\}$   |
| **DRC**  | $\{\,\langle a,b,c,d,e\rangle \mid \langle a,b,c,d\rangle\in R \land \langle b,d,e\rangle\in S\,\}$                                              |

9. **Division**
   * Relations: $R(A,B)$, $S(B)$

| Language | Expression                                                                                               |
| -------- | -------------------------------------------------------------------------------------------------------- |
| **RA**   | $R\div S$                                                                                                |
| **TRC**  | $\{\,t \mid \forall q\in S\;\exists p\in R\;(p.A=t.A \land p.B=q.B)\,\}$                                 |
| **DRC**  | $\{\,\langle a\rangle \mid \forall b\;(\langle b\rangle\in S \rightarrow \langle a,b\rangle\in R)\,\}$   |

### SQL

* SQL stands for Structured Query Language.
* Used for defining, modifying, controlling, and querying relational databases.

#### SQL Categories

1. DDL — Data Definition Language
   * Defines or modifies database structures.
   * Commands: `CREATE`, `DROP`, `ALTER`, `TRUNCATE`, `RENAME`.
2. DML — Data Manipulation Language
   * Manages data stored in database objects.
   * Commands: `INSERT`, `UPDATE`, `DELETE`, `CALL`, `LOCK`.
3. DQL — Data Query Language
   * Retrieves data.
   * Command: `SELECT`.
4. DCL — Data Control Language
   * Controls access to database data.
   * Commands: `GRANT`, `REVOKE`.
5. TCL — Transaction Control Language
   * Controls transactions.
   * Commands: `COMMIT`, `ROLLBACK`, `SAVEPOINT`.

#### Data Types

* `CHAR(n)`: fixed-length character string.
* `VARCHAR(n)`: variable-length character string.
* `INT`: integer.
* `SMALLINT`: smaller-range integer.
* `NUMERIC(p,d)`: exact numeric value.
* `REAL`: approximate numeric value.
* `DOUBLE PRECISION`: higher-precision approximate numeric value.
* `FLOAT(n)`: approximate numeric value with specified precision.

#### CREATE TABLE

* Creates a new table.
* Syntax:

```sql
CREATE TABLE table_name (
    column1 datatype constraint,
    column2 datatype constraint,
    ...
);
```

#### Integrity Constraints

* `NOT NULL`: prevents `NULL` values.
* `PRIMARY KEY`: uniquely identifies tuples.
* `FOREIGN KEY`: references a key in another relation.
* Syntax:

```sql
CREATE TABLE table_name (
    column1 datatype NOT NULL,
    column2 datatype,
    PRIMARY KEY (column1),
    FOREIGN KEY (column2)
        REFERENCES referenced_table(referenced_column)
);
```

#### Referential Triggered Actions
* `CASCADE`: propagates referenced updates or deletions.
* `SET NULL`: sets the foreign key to `NULL`.
* `SET DEFAULT`: sets the foreign key to its default value.
* `NO ACTION`: prevents the operation when related tuples exist.
* Syntax:

```sql
FOREIGN KEY (column_name)
REFERENCES referenced_table(referenced_column)
ON DELETE action
ON UPDATE action
```

#### INSERT

* Inserts new tuples.
* Syntax:

```sql
INSERT INTO table_name (column1, column2, ...)
VALUES (value1, value2, ...);
```

#### UPDATE

* Modifies existing tuples.
* Syntax:

```sql
UPDATE table_name
SET column1 = value1,
    column2 = value2
WHERE condition;
```

#### DELETE

* Removes tuples.
* Syntax:

```sql
DELETE FROM table_name
WHERE condition;
```

#### DROP TABLE

* Removes a table definition.
* Syntax:

```sql
DROP TABLE table_name;
```

#### ALTER TABLE

* Modifies the structure of an existing table.
* Add column:

```sql
ALTER TABLE table_name
ADD column_name datatype;
```

* Drop column:

```sql
ALTER TABLE table_name
DROP COLUMN column_name;
```

#### SELECT

* Retrieves data.
* Syntax:
```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition
ORDER BY column_name ASC | DESC
LIMIT number;
```

#### AND / OR

* Combine filtering conditions.
* Syntax:

```sql
SELECT column_list
FROM table_name
WHERE condition1
  AND | OR condition2;
```

#### Aliasing

* Temporarily renames a table or column.
* Syntax:

```sql
SELECT column_name AS column_alias
FROM table_name AS table_alias;
```

#### DISTINCT

* Removes duplicate rows from the result.
* Syntax:

```sql
SELECT DISTINCT column1, column2, ...
FROM table_name;
```

#### Set Operations

1. UNION
   * Combines results and removes duplicates.

```sql
SELECT column_list FROM table1
UNION
SELECT column_list FROM table2;
```

2. UNION ALL
   * Combines results and retains duplicates.

```sql
SELECT column_list FROM table1
UNION ALL
SELECT column_list FROM table2;
```

3. INTERSECT
   * Returns common rows.

```sql
SELECT column_list FROM table1
INTERSECT
SELECT column_list FROM table2;
```

4. EXCEPT
   * Returns rows from the first result absent from the second.

```sql
SELECT column_list FROM table1
EXCEPT
SELECT column_list FROM table2;
```

#### LIKE / NOT LIKE

* Performs pattern matching.
* Wildcards:
* `%` — any sequence of characters.
* `_` — exactly one character.
* Syntax:

```sql
SELECT column_list
FROM table_name
WHERE column_name LIKE pattern;
```

```sql
SELECT column_list
FROM table_name
WHERE column_name NOT LIKE pattern;
```

#### BETWEEN

* Filters values within a range.
* Syntax:

```sql
SELECT column_list
FROM table_name
WHERE column_name BETWEEN value1 AND value2;
```

#### NULL Handling

* `IS NULL` checks for `NULL`.
* `IS NOT NULL` checks for non-`NULL` values.
* Syntax:

```sql
SELECT column_list
FROM table_name
WHERE column_name IS NULL;
```

```sql
SELECT column_list
FROM table_name
WHERE column_name IS NOT NULL;
```

#### IFNULL

* Replaces `NULL` with a specified value.
* Syntax:

```sql
SELECT IFNULL(column_name, value) AS alias
FROM table_name;
```

#### IN / NOT IN

* Checks membership in a set of values.
* Syntax:

```sql
SELECT column_list
FROM table_name
WHERE column_name IN (value1, value2, ...);
```

```sql
SELECT column_list
FROM table_name
WHERE column_name NOT IN (value1, value2, ...);
```

#### Non-Correlated Subquery

* Executes independently of the outer query.
* Syntax:

```sql
SELECT column_list
FROM table1
WHERE column_name IN (
    SELECT column_name
    FROM table2
    WHERE condition
);
```

#### Correlated Subquery

* References columns from the outer query.
* Syntax:

```sql
SELECT column_list
FROM table1 AS t1
WHERE condition_operator (
    SELECT expression
    FROM table2 AS t2
    WHERE t1.column = t2.column
);
```

#### EXISTS

* Tests whether a subquery returns at least one row.
* Syntax:

```sql
SELECT column_list
FROM table1 AS t1
WHERE EXISTS (
    SELECT column
    FROM table2 AS t2
    WHERE t1.column = t2.column
);
```

#### NOT EXISTS

* Tests whether a subquery returns no rows.
* Syntax:

```sql
SELECT column_list
FROM table1 AS t1
WHERE NOT EXISTS (
    SELECT column
    FROM table2 AS t2
    WHERE t1.column = t2.column
);
```

#### INNER JOIN

* Returns matching rows from both tables.
* Syntax:

```sql
SELECT column_list
FROM table1 AS t1
INNER JOIN table2 AS t2
    ON t1.column = t2.column;
```

#### LEFT JOIN

* Returns all rows from the left table and matching rows from the right table.
* Syntax:

```sql
SELECT column_list
FROM table1 AS t1
LEFT JOIN table2 AS t2
    ON t1.column = t2.column;
```

#### RIGHT JOIN

* Returns all rows from the right table and matching rows from the left table.
* Syntax:

```sql
SELECT column_list
FROM table1 AS t1
RIGHT JOIN table2 AS t2
    ON t1.column = t2.column;
```

#### FULL OUTER JOIN

* Returns matching and non-matching rows from both tables.
* Syntax:

```sql
SELECT column_list
FROM table1 AS t1
FULL OUTER JOIN table2 AS t2
    ON t1.column = t2.column;
```

#### Aggregate Functions

* Common functions: `COUNT`, `SUM`, `AVG`, `MIN`, `MAX`
* Syntax:

```sql
SELECT aggregate_function(column_name)
FROM table_name
WHERE condition;
```

#### GROUP BY

* Groups rows having the same values in specified columns.
* Syntax:

```sql
SELECT column_name, aggregate_function(column_name)
FROM table_name
GROUP BY column_name;
```

#### HAVING

* Filters groups after aggregation.
* Syntax:

```sql
SELECT column_name, aggregate_function(column_name)
FROM table_name
GROUP BY column_name
HAVING aggregate_function(column_name) condition;
```

#### ORDER BY

* Sorts the query result.
* Syntax:

```sql
SELECT column_list
FROM table_name
ORDER BY column1 ASC, column2 DESC;
```

#### LIMIT

* Restricts the number of returned rows.
* Syntax:

```sql
SELECT column_list
FROM table_name
LIMIT number;
```

#### Query Execution Order

![](/images/dbms/query-exe-order.png)

Ref: https://bytebytego.com/guides/visualizing-a-sql-query/
### Examples

#### Schema

$$
  \text{EMPLOYEE}(\underline{eno},\; ename,\; dob,\; gender,\; salary,\; super\_eno,\; dno)
$$

$$
  \text{DEPARTMENT}(\underline{dno},\; dname,\; mgr\_eno,\; mgr\_startdate)
$$

$$
  \text{DEPT\_LOCATIONS}(\underline{dno,\; dlocation})
$$

$$
  \text{PROJECT}(\underline{pno},\; pname,\; plocation,\; dno)
$$

$$
  \text{WORKS\_ON}(\underline{eno,\; pno},\; hrs)
$$

$$
  \text{DEPENDENT}(\underline{eno,\; dependent\_name},\; gender,\; dob,\; relationship)
$$

1. Employees of department 5 with salary greater than 40000.

$$
  \pi_{eno,\; ename}\left(\sigma_{dno=5 \; \land \; salary>40000}(\text{EMPLOYEE})\right)
$$

```sql
SELECT eno, ename
FROM EMPLOYEE
WHERE dno = 5 AND salary > 40000;
```

2. List employee number, employee name, and department name of every employee with their department name.

$$
  r_1 \leftarrow \text{EMPLOYEE}(e) \bowtie_{e.dno=d.dno} \text{DEPARTMENT}(d)
$$

$$
  r \leftarrow \pi_{e.eno,\; e.ename,\; d.dname}(r_1)
$$

```sql
SELECT e.eno, e.ename, d.dname
FROM EMPLOYEE AS e
JOIN DEPARTMENT AS d
ON e.dno = d.dno;
```

3. List each employee’s name together with their supervisor’s name.

$$
  r_1 \leftarrow \rho_e(\text{EMPLOYEE}) \bowtie_{e.super\_eno=s.eno} \rho_s(\text{EMPLOYEE})
$$

$$
  r \leftarrow \pi_{e.ename,\; s.ename}(r_1)
$$

```sql
SELECT e.ename AS employee, s.ename AS supervisor
FROM EMPLOYEE AS e
JOIN EMPLOYEE AS s
ON e.super_eno = s.eno;
```

4. List all details of projects along with their corresponding department details.

$$
  \text{PROJECT} \ast \text{DEPARTMENT}
$$

```sql
SELECT *
FROM PROJECT
NATURAL JOIN DEPARTMENT;
```

5. List every employee and their department name, keeping employees even when `dno` is NULL.

$$
  r_1 \leftarrow \rho_e(\text{EMPLOYEE}) ⟕_{e.dno=d.dno} \rho_d(\text{DEPARTMENT})
$$

$$
  r \leftarrow \pi_{e.eno, e.ename, d.dname}(r_1)
$$

```sql
SELECT e.eno, e.ename, d.dname
FROM EMPLOYEE AS e
LEFT OUTER JOIN DEPARTMENT AS d
ON e.dno = d.dno;
```

6. List the employee numbers of everyone who either manages a department or supervises an employee.

$$
  \rho_{eno}
  \left(
  \pi_{super\_eno}(\text{EMPLOYEE})
  \right)
  \cup
  \rho_{eno}
  \left(
  \pi_{mgr\_eno}(\text{DEPARTMENT})
  \right)
$$

```sql
SELECT super_eno AS eno
FROM EMPLOYEE
WHERE super_eno IS NOT NULL

UNION

SELECT mgr_eno AS eno
FROM DEPARTMENT
WHERE mgr_eno IS NOT NULL;
```

7. List all employees who appear in the `WORKS_ON` relation.

$$
\rho_e(\text{EMPLOYEE})
\ltimes_{e.eno=w.eno}
\rho_w(\text{WORKS\_ON})
$$

```sql
SELECT *
FROM EMPLOYEE
WHERE eno IN (
    SELECT eno
    FROM WORKS_ON
);
```

8. List all employees who do not manage any department.

$$
  \rho_e(\text{EMPLOYEE})
  \triangleright_{e.eno=d.mgr\_eno}
  \rho_d(\text{DEPARTMENT})
$$

```sql
SELECT *
FROM EMPLOYEE
WHERE eno NOT IN (
    SELECT mgr_no
    FROM DEPARTMENT
);
```

9. List the employee numbers of employees who work on every project controlled by department 5.

$$
  r_1 \leftarrow
  \pi_{pno}
  \left(
  \sigma_{dno=5}(\text{PROJECT})
  \right)
$$

$$
  r_2 \leftarrow \pi_{eno,\;pno}(\text{WORKS\_ON})
$$

$$
  r \leftarrow r_2 \div r_1
$$

```sql
SELECT DISTINCT eno
FROM WORKS_ON w1
WHERE NOT EXISTS (
    SELECT pno
    FROM PROJECT
    WHERE dno = 5

    EXCEPT

    SELECT pno
    FROM WORKS_ON w2
    WHERE w2.eno = w1.eno
);
```

10. For each department, find the number of employees and total salary.

$$
  {}_{dno}\mathcal{F}_{COUNT(eno)\rightarrow head\_count,\;SUM(salary)\rightarrow total\_salary}(\text{EMPLOYEE})
$$

```sql
SELECT dno,
       COUNT(eno) AS head_count,
       SUM(salary) AS total_salary
FROM EMPLOYEE
GROUP BY dno;
```

11. List departments whose average employee salary is greater than 40000.

$$
  r_1 \leftarrow {}_{dno}\mathcal{F}_{AVG(salary)\rightarrow avg\_sal}(\text{EMPLOYEE})
$$

$$
  r \leftarrow \sigma_{avg\_sal>40000}(r_1)
$$

```sql
SELECT dno,
       AVG(salary) AS avg_sal
FROM EMPLOYEE
GROUP BY dno
HAVING AVG(salary) > 40000;
```

12. List employees whose salary is greater than the average salary of their own department.

```sql
-- Correlated
SELECT e.eno, e.ename
FROM EMPLOYEE AS e
WHERE e.salary > (
    SELECT AVG(salary)
    FROM EMPLOYEE
    WHERE dno = e.dno
);
```

$$
  r_1 \leftarrow {}_{dno}\mathcal{F}_{AVG(salary)\rightarrow avg\_sal}(\text{EMPLOYEE})
$$

$$
  r_2 \leftarrow \rho_e(\text{EMPLOYEE}) \bowtie_{e.dno=a.dno} \rho_a(r_1)
$$

$$
  r_3 \leftarrow \sigma_{e.salary>a.avg\_sal}(r_2)
$$

$$
  r \leftarrow \pi_{e.eno,\;e.ename}(r_3)
$$

```sql
-- Uncorrelated
SELECT e.eno, e.ename
FROM EMPLOYEE AS e
JOIN (
    SELECT dno,
           AVG(salary) AS avg_sal
    FROM EMPLOYEE
    GROUP BY dno
) AS a
ON e.dno = a.dno
WHERE e.salary > a.avg_sal;
```

## Transactional Control

### Transaction

> **Transaction:** A unit of program execution that accesses and possibly updates various data items.

Example: Transfer 50 from Account A to Account B

```text
read A
A = A - 50
write A

read B
B = B + 50
write B
```

The transaction must behave as a single logical unit.

### ACID Properties

| Property        | Meaning                                                         | Key Point                                                                                                            |
| --------------- | --------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| **Atomicity**   | All or nothing.                                                 | A transaction either completes fully and commits, or fails and rolls back. Partial execution is not allowed. |
| **Consistency** | Moves the database from one valid state to another valid state. | All constraints, cascades, triggers, and integrity conditions must remain satisfied.                                 |
| **Isolation**   | Transactions are independent.                                   | Concurrent execution must behave like some valid sequential execution.                                               |
| **Durability**  | Committed data is never lost.                                   | Once committed, changes are permanent and stored in non-volatile memory.                                             |

### Transaction States

![](/images/dbms/transaction-state.png)

| State                   | Meaning                                                             | Key Point                                                                         |
| ----------------------- | ------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| **Active**              | Initial state while the transaction is executing.                   | Read, write, and computation operations occur here.                               |
| **Partially Committed** | Final statement has executed, but changes may not yet be permanent. | Transaction instructions are complete, but durability is not yet guaranteed.      |
| **Failed**              | Normal execution can no longer continue.                            | May occur due to system, transaction, constraint, or concurrency-control failure. |
| **Aborted**             | Database is restored to the state before the transaction started.   | Transaction may be restarted or killed.                                   |
| **Committed**           | Transaction has completed successfully.                             | Changes are accepted as successful.                                               |
| **Terminated**          | Final state after completion.                                       | Reached after either commit or abort.                                     |

### Concurrent Executions

> Multiple transactions are allowed to run concurrently in the system.

Advantages:
* Increased processor utilization
* Increased disk utilization
* Reduced average response time

### Concurrency Problems

| Problem | Main Conflict / Idea |
|---|---|
| Lost Update | Write-Write conflict |
| Dirty Read | Write-Read conflict |
| Unrepeatable Read | Read-Write conflict |
| Phantom Read | Change in the set of rows returned |
| Incorrect Summary | Aggregate computed while underlying data changes |

#### Lost Update Problem

> **Lost Update Problem:** One transaction's update is overwritten by another transaction.

```text
T1: read A
T2: read A
T1: modify A
T2: modify A
T1: write A
T2: write A
```

#### Dirty Read Problem

> **Dirty Read:** A transaction reads data modified by another transaction before that transaction has committed.

Also called:
* Uncommitted Read
* Uncommitted Dependency

```text
T1: write A
T2: read A
T1: rollback
```

Here, $T_2$ has read a value that never became permanent.

#### Unrepeatable Read Problem

> **Unrepeatable Read:** A transaction reads the same row multiple times and obtains different values because another transaction modifies the row between the reads.

```text
T1: read A
T2: update A
T1: read A again
```

Result: `First read of A != Second read of A`

#### Phantom Read Problem

> **Phantom Read:** A transaction reads a set of rows satisfying a condition, and another transaction inserts, deletes or modifies rows matching the same condition before the first transaction repeats the query.

* Suppose the first query returns 30 rows.
* Another transaction inserts a matching row.
* Running the same query again may return 31 rows.
* The newly appearing or disappearing row is called a **phantom row**.

#### Incorrect Summary Problem

> **Incorrect Summary:** An aggregate operation runs while another transaction modifies values being aggregated, causing an inconsistent result.

```text
T1: SUM(...)
T2: modifies values included in the sum
T1: continues summation
```

The summary can combine old values and new values.

### Schedule Classification

> **Schedule:** A sequence of instructions that specifies the chronological order in which instructions of concurrent transactions are executed.

![](/images/dbms/schedule-classification.png)

#### Serial Schedule

> **Serial Schedule:** A schedule in which transactions are executed one after another without overlap or interleaving.

```text
T1 completes
 -> T2 starts
 -> T2 completes
 -> T3 starts
```

* Advantage
  * Guarantees consistency.
* Disadvantage
  * Lower concurrency.
  * May not be optimal for performance.

#### Complete Schedule

> **Complete Schedule:** A schedule where all operations of all transactions are included and transaction boundaries are respected.

* Each transaction ultimately completes through either `commit` or `abort`.

#### Recoverable Schedule

> **Recoverable Schedule:** A schedule in which a transaction commits only after every transaction whose changes it has read has committed.

Suppose:

```text
T1 writes A
T2 reads A written by T1
```

Then:

```text
commit(T1) -> commit(T2)
```

must hold.

This ensures that a dependent transaction does not commit before the transaction on which it depends.

#### Non-Recoverable Schedule

> **Non-Recoverable Schedule:** A schedule where a transaction commits before another transaction on which it depends has committed.

```text
T1 writes A
T2 reads A
T2 commits
T1 aborts
```

Now rollback of $T_2$ may no longer be possible because it has already committed.

#### Cascading Schedule

> **Cascading Schedule:** A schedule in which aborting one transaction causes a chain of aborts in dependent transactions.

```text
T1 writes A
T2 reads A
T2 writes B
T3 reads B

T1 aborts
 -> T2 must abort
 -> T3 must abort
```

#### Cascadeless Schedule

> **Cascadeless Schedule:** A schedule in which a transaction reads a value only after the transaction that wrote the value has committed.

If:

```text
T1 writes A
```

then another transaction may read $A$ only after:

```text
commit(T1)
```

* Advantages
  * Avoids cascading aborts
  * Simplifies recovery
  * Provides high reliability
* Disadvantage
  * Reduces concurrency

#### Strict Schedule

> **Strict Schedule:** A transaction cannot read or write an object until the last transaction that wrote that object has committed or aborted.

* Every strict schedule is both cascadeless and recoverable.

#### Equivalent Schedules

> **Equivalent Schedules:** Two schedules are equivalent if they produce the same final database state.

#### Result Equivalent Schedules

> **Result Equivalent:** Two schedules are result equivalent if they produce the same final database state for the same initial database values.

#### Conflicting Operations

> Two operations conflict when they belong to different transactions, access the same data item and at least one operation is a write.

For operations on the same item $A$:

| Pair | Conflict? |
|---|---|
| $R_i(A),R_j(A)$ | No |
| $R_i(A),W_j(A)$ | Yes |
| $W_i(A),R_j(A)$ | Yes |
| $W_i(A),W_j(A)$ | Yes |

#### Conflict Equivalent Schedules

> **Conflict Equivalent Schedules:** Two schedules are conflict equivalent if the order of every pair of conflicting operations is the same in both schedules.

![](/images/dbms/ce-1.png)

#### Conflict Serializable Schedule

> **Conflict Serializable:** A schedule is conflict serializable if it is conflict equivalent to some serial schedule.

#### Determining Conflict Serializability

> Conflict serializability can be tested using a precedence graph.

1. Create one node for each transaction.
2. Add a directed edge for each conflicting dependency.
3. Check the graph for a cycle.

```text
Precedence Graph
 -> Acyclic -> Conflict Serializable
 -> Cyclic  -> Not Conflict Serializable
```

If the graph is acyclic, a valid serial order can be obtained using a topological ordering.

![](/images/dbms/cs-1.png)

![](/images/dbms/cs-2.png)

#### View Equivalent Schedule

> **View Equivalent:** Two schedules are view equivalent if they preserve the same read relationships and final writes.

1. Initial Read: For each data item, the transaction that performs the initial read must read the same initial value in both schedules.
2. Read-Write Sequence: The producer-consumer relationship must be preserved.
3. Final Update: For each data item, the final write must be performed by the same transaction in both schedules.

#### View Serializable Schedule

> **View Serializable:** A schedule is view serializable if it is view equivalent to some serial schedule.

![](/images/dbms/vs-1.png)

#### Blind Write

> **Blind Write:** A transaction writes a data item without first reading that item.

#### Polygraph Test

> Use the Polygraph Test for view-serializability analysis when blind writes are present.

```text
Schedule:

+----------------+----------------+----------------+
|       T1       |       T2       |       T3       |
+----------------+----------------+----------------+
| R1(A)          |                |                |
|                | W2(A)          |                |
|                |                | R3(A)          |
| W1(A)          |                |                |
|                |                | W3(A)          |
+----------------+----------------+----------------+

Conflicting operations:

R1(A) -> W2(A)
      gives
      T1 -> T2

W2(A) -> W1(A)
      gives
      T2 -> T1


Precedence Graph:

        +------->+
       T1       T2
        +<-------+


Cycle:

        T1 -> T2 -> T1

Therefore:

Cycle in Precedence Graph
        |
        v
NO Topological Sort
        |
        v
NOT Conflict Serializable


--------------------------------------------------


Now check VIEW SERIALIZABILITY using Polygraph Test:

1. Initial Read
   R1(A) is the initial read of A.

              T1 must come first


2. Producer -> Consumer

   W2(A) -> R3(A)

   T3 reads the value written by T2.

              T2 -> T3


3. No other W(A) should occur between:

              W2(A) -> R3(A)

   Therefore W1(A) must be either:

        Before W2(A)          After R3(A)
             |                    |
             v                    v
        T1 -> T2              T3 -> T1


Choose:

        T1 -> T2

Then:

        T1 -> T2 -> T3

is acyclic.


Final Serial Order:

        +----+     +----+     +----+
        | T1 | --> | T2 | --> | T3 |
        +----+     +----+     +----+
```

#### Relationship Between Conflict and View Serializability

![](/images/dbms/ser-rel.png)

### Concurrency Control Protocols

```text
Concurrency Control Protocols
|
|-> Lock-Based Protocols
|   |
|   |-> Two-Phase Locking
|   |   |-> Basic 2PL
|   |   |-> Conservative 2PL
|   |   |-> Strict 2PL
|   |   |-> Rigorous 2PL
|   |
|   |-> Graph-Based Protocol
|
|-> Timestamp-Based Protocol
|   |-> Timestamp Ordering Protocol
|   |-> Thomas Write Rule
|
|-> Multiple Granularity Protocol
|
|-> Multiversion Protocol
    |-> MV 2PL
    |-> MV Timestamp Ordering
```

#### Locks

* Transactions acquire and release locks to control access to data.
* Shared Lock ($L_S$): Used when a transaction wants to read a data item.
  * Multiple transactions can usually hold shared locks on the same item.
* Exclusive Lock ($L_X$): Used when a transaction wants to write a data item.
  * An exclusive lock prevents other transactions from acquiring conflicting locks on that item.

##### Lock Compatibility Matrix

| Requested / Existing | $S$ | $X$ |
|---|---:|---:|
| **S** | Yes | No |
| **X** | No | No |

#### Problems with Simple Locking

1. Inconsistent State: Improper lock acquisition and release can still allow transactions to observe or produce inconsistent data.
2. Deadlock: Transactions wait indefinitely for locks held by one another.
3. Serializability Issue: A schedule may obey individual lock/unlock operations but still fail to be conflict serializable if locks are released and reacquired without a disciplined protocol.

#### Two-Phase Locking Protocol

> **Two-Phase Locking (2PL):** Locking and unlocking are divided into two phases.

The phases are:
1. Growing Phase: During the growing phase, a transaction may obtain locks but may not release locks.
2. Shrinking Phase: During the shrinking phase, a transaction may release locks but may not obtain new locks.

> **Locking Point (LP):** The point at which a transaction reaches the end of its lock-acquisition phase and has acquired every lock it needs.

$$
  \text{Growing Phase}\rightarrow
  \text{Locking Point}\rightarrow
  \text{Shrinking Phase}
$$

The locking points can be used to determine a serial order.

##### Guarantee of 2PL

Two-Phase Locking guarantees conflict serializability.

##### Major Problems

* Deadlocks
* Cascading rollback

##### Types of 2PL

1. **Basic 2PL**
   * Basic 2PL follows the two-phase rule: $\text{Growing Phase} \rightarrow \text{Locking Point} \rightarrow \text{Shrinking Phase}$
   * It can cause:
     * deadlock
     * cascading rollback
2. **Strict 2PL**
   * All exclusive locks $L_X$ held by a transaction are released only after the transaction commits.
   * $\text{Acquire locks} \rightarrow \text{execute transaction} \rightarrow \text{commit} \rightarrow \text{release X locks}$
   * This ensures that no other transaction access the data modified by a transaction until it is commited.
   * Advantages:
     * Recoverable
     * Cascadeless
     * Produces strict schedules
   * Disadvantage
     * Deadlocks can occur
3. **Rigorous 2PL**
   * Both shared locks $L_S$ and exclusive locks $L_X$ are released only after the transaction commits.
   * $\text{Hold S locks and X locks} \rightarrow \text{commit} \rightarrow \text{release all locks}$
   * Advantages
     * Recoverable
     * Cascadeless
     * Stronger consistency guarantee
   * Disadvantages
     * Lower concurrency
     * Starvation
     * Deadlocks
4. **Conservative 2PL**
   * A transaction acquires all locks it requires at the beginning.
   * If transaction cannot obtain every required lock it waits instead of obtaining only some of them.
   * Advantages
     * Recoverable
     * Cascadeless
     * Deadlock free
   * Disadvantages
     * Lower concurrency
     * Starvation may occur

#### Graph-Based Protocol

* Database items are organized using a directed acyclic graph (deadlock avoidance), commonly implemented as a tree protocol.
* Locking Rules:
  1. The first lock may be acquired on any data item.
  2. After the first lock, a transaction can lock another data item only if it is a child of a currently locked data item.
  3. A data item can be locked by a transaction at most once.
  4. Data items may be unlocked at any time during the transaction.

#### Timestamp-Based Protocol

* Ensures serializability by assigning a unique timestamp to each transaction.
* Each transaction $T_i$ is assigned $TS(T_i)$ when it enters the system. The timestamp remains fixed for that execution.
* Timestamp Ordering: If $TS(T_i) < TS(T_j)$ then $T_i$ is treated as the older transaction and the protocol attempts to preserve the logical order $T_i \rightarrow  T_j$ for conflicting operations.

##### Timestamp Ordering Protocol

* The Timestamp Ordering Protocol ensures that read and write operations follow the order defined by transaction timestamps.
* If an operation violates timestamp order: $\text{Operation rejected} \rightarrow \text{Transaction rolled back} \rightarrow \text{Transaction restarted with a new timestamp}$
* This enforces serializability according to timestamp order.

![](/images/dbms/top.png)

##### Thomas Write Rule

* Allows certain outdated write operations to be ignored instead of aborting the transaction.
* $\text{Outdated write} \rightarrow \text{ignore the write} \rightarrow \text{continue transaction}$

![](/images/dbms/thomas.png)

![](/images/dbms/top-vs-thomas.png)

## File Structure

### Blocks and Records

A database is a collection of files, each file is a collection of records, and each record is a sequence of fields.

```text
Database
 -> Files
    -> Records
       -> Fields
```

> **Block:** A block is the storage unit used to store records.

> **Blocking Factor:** The average number of records stored per block.

### Strategies for Storing Records into Blocks

#### Spanned Strategy

> **Spanned Strategy:** Allows a partial part of a record to be stored in one block and the remaining part in another block.

* Advantage: No wastage of memory.
* Disadvantage: Multiple block accesses may be required to retrieve one record.
* Suitable For: Variable-length records.

Example: Block Size = 100 bytes, Record Size = 30 bytes

```text
Block 1: R1 | R2 | R3 | part of R4
                         |
                         -> remaining part stored in Block 2
```

#### Unspanned Strategy

> **Unspanned Strategy:** A record cannot be stored in more than one block.

* Advantage: Reduced block accesses for a single record.
* Disadvantage: Memory may be wasted because the unused portion of a block cannot hold a partial record.
* Suitable For: Fixed-length records.

### Organization of Records in a File

#### Ordered File Organization

> **Ordered File:** Records are stored in order based on some search-key value.

* Searching: Binary search is used.
  * If the file contains $B$ blocks, average block accesses are approximately $\log_2 B$.
* Advantage: Searching is efficient.
* Disadvantage: Insertion is expensive because it may require reorganization of the file.

#### Unordered File Organization

> **Unordered File Organization:** Records are stored without any specific order.

* New records are usually appended to the end of the file.
* Searching: Linear search is used. For $B$ blocks, average block access is approximately $\frac{B}{2}$.
* Advantage: Insertion is efficient.
* Disadvantage: Searching is inefficient.

### Index

> **Index:** A structure used to improve search efficiency in a database.

An index record contains two fields:
1. Key
2. Block Pointer

> **Key:** A value used for searching.

> **Block Pointer:** A pointer to the block where the corresponding key is located.

#### Characteristics of an Index

* The index is maintained in an ordered structure.
* Searching is performed using binary search.
* The index can be created on any field of a relation, including:
  * Primary Key
  * Candidate Key
  * Non-key Attribute

If the index consists of $B_i$ blocks, the average number of block accesses is:

$$
\log_2(B_i) + 1
$$

Here, $\log_2(B_i)$ represents the accesses required to search the index, while the additional $1$ represents the access to the actual data block after the index entry is found.

#### Types of Indexes

```text
Indexes
|
|-> Single-Level Index
|   |-> Primary Index
|   |-> Clustered Index
|   |-> Secondary Index
|
|-> Multilevel Index
    |-> B-Tree
    |-> B+ Tree
```

#### Dense Index

> **Dense Index:** Contains an index entry for every search-key value in the data.

* Advantage: Faster access.
* Disadvantage: Requires more storage space.

#### Sparse Index

> **Sparse Index:** Contains index entries for only some search-key values.

Typically, an index entry corresponds to the first record of each block.

* Advantage: Requires less space.
* Disadvantage: May require more access time.

#### Primary Index

> **Primary Index:** An index on an ordered file in which the first field of the index is the same as the primary key of the data and the second field is a block pointer.

Characteristics:
* Data file is ordered on the primary key.
* Records are fixed length.
* An index entry is created for the first record of each block.
* The first record of a block is called a Block Anchor.
* Primary index is a sparse index.
* Average Block Access: $\log_2(B_i) + 1$.

#### Clustered Index

> **Clustered Index:** An index on an ordered file where the first field is a clustering field, which is a non-key field, and the second field is a block pointer.

![](/images/dbms/clusterd-vs-non-clustered.png)
Ref: https://www.scaler.com/topics/clustered-and-non-clustered-index/

Characteristics:
* Records are physically ordered according to the clustering field.
* The clustering field does not have to contain unique values.
* One index entry is created for each distinct value of the clustering field.
* The block pointer points to the first block where that clustering-field value occurs.
* It is a sparse index.
* Average Block Access: $\log_2(B_i) + 1$.

#### Secondary Index

> **Secondary Index:** Contains search keys, one for each record, together with pointers to the corresponding records.

A secondary index may be created on:

* a non-key attribute
* a candidate key

Characteristics:
* Number of index entries = Number of records.
* It is a dense index.
* Access time: $\log_2(B_i) + 1$

### Multilevel Index

> **B-Tree and B+ Tree:** Generalizations of multilevel indexing.

Multilevel indexing contains several levels of index blocks.

```text
Top-Level Index
 -> Lower-Level Index
 -> ...
 -> Data Block / Record
```

#### Terminologies

> **Block / Node Pointer:** Points to another node or block.

> **Record Pointer:** Points directly to a record.

> **Order:** Maximum number of children a node can have.

#### B Tree Properties

Let P be the order of B-Tree,

* The root can have between $2$ and $P$ children. If the root is not a leaf then $1 \leq \text{number of keys} \leq P-1$.
* An internal node can have between $\left\lceil \frac{P}{2} \right\rceil$ and $P$ children. Therefore, the number of keys lies between $\left\lceil \frac{P}{2} \right\rceil - 1$ and $P-1$.
* A leaf node can contain between $\left\lceil \frac{P}{2} \right\rceil - 1$ and $P-1$ keys.

Example $P=5$:

$P-1 = 4$

| Node | Minimum Keys | Maximum Keys |
|---|---|---|
| Root | 1 | 4 |
| Internal | 2 | 4 |
| Leaf | 2 | 4 |

#### Overflow and Underflow

> **Overflow:** Occurs when a key is inserted into a node that already contains the maximum number of keys.

```text
Overflow -> Split Node
```

> **Underflow:** Occurs when deletion causes a node to contain fewer keys than the minimum permitted number.

```text
Underflow -> Redistribute or Merge
```

#### B Tree Search

![](/images/dbms/btree-search.png)

```text
search_btree(tk, node, P) {
    s = 0

    while (s < P - 1) {
        if (tk == node.key[s])
            return node.ref[s]

        elif (tk < node.key[s])
            break

        else
            s += 1
    }

    if (node.subtree[s] is not None)
        return search_btree(tk, node.subtree[s], P)

    else
        return -1
}
```

where:

* `tk`: target key
* `node`: tree node being searched
* $P$: order of the B-Tree

Time complexity: $O(\log_P n)$

where:

* $n$: number of search keys
* $P$: order of the B-Tree

#### B Tree Insertion

1. Search to determine which leaf node should contain the new key.
2. If the leaf node has space, insert the key in ascending order.
3. If the leaf is full:
   * split its keys into two parts
   * promote the median key to the parent
4. If the parent node is full:
   * recursively split the parent
   * promote its median key upward
5. If the root overflows:
   * split the root
   * create a new root containing the promoted median key

```text
Insert Key
 -> Find Leaf
 -> Space Available?
    -> Yes -> Insert in Sorted Order
    -> No  -> Split
              -> Promote Median
              -> Repeat upward if necessary
```

```text
Insertion Order: 2, 5, 10, 11, 1, 6, 9, 4, 3, 12, 18, 20, 25
```

![](/images/dbms/btree-insert.png)

Visualizer: https://www.cs.usfca.edu/~galles/visualization/BTree.html

#### B Tree Deletion

1. If the key to delete is not in a leaf:
   * swap it with its successor or predecessor according to natural key order
   * delete the corresponding key from the leaf
2. If the leaf contains more than the minimum number of keys:
   * delete the key
   * no further action is required
3. If the node contains exactly the minimum number of keys:
   * inspect its immediate siblings
4. If one sibling contains more than the minimum:
   * redistribute
   * move one sibling key to the parent
   * move one parent key to the deficient node
5. If both immediate siblings contain exactly the minimum:
   * merge the deficient node with a sibling
   * include one parent entry in the merged node
6. If the parent then has too few keys:
   * propagate the repair upward

```text
Delete
 -> Underflow?
    -> No -> Done
    -> Yes
       -> Borrow possible?
          -> Yes -> Redistribute
          -> No  -> Merge
                    -> Repair parent recursively
```

> **Redistribution:** A key is borrowed from a sibling that contains more than the minimum number of keys.

![](/images/dbms/btree-delete-1.png)

> **Coalescing:** If neither sibling can lend a key, the deficient node is merged with a sibling together with a separator key from the parent.

```text
Deficient Node + Parent Separator + Sibling -> One Merged Node
```

![](/images/dbms/btree-delete-2.png)

#### B+ Tree Properties and Terminologies

> **B+ Tree:** A multilevel tree index in which internal nodes guide the search and leaf nodes contain key-value/data-pointer pairs.

Let P be the order of B+ tree,

* An internal node has between $\left\lceil\frac{P}{2}\right\rceil$ and $P$ children. The number of search-key values lies between $\left\lceil\frac{P}{2}\right\rceil-1$ and $P-1$.

![](/images/dbms/bptree.png)

| Subtree | B-tree | B+ tree |
|---|---|---|
| $S_1$ | $x < K_1$ | $x < K_1$ |
| $S_2$ | $K_1 < x < K_2$ | $K_1\leq x < K_2$ |
| $S_3$ | $x>K_2$ | $x\geq K_2$ |

> **Order of a Non-Leaf Node:** Maximum number of children that it can contain.

> **Order of a Leaf Node:** Maximum number of key-value pairs it can contain.

| Node type | B-tree of order $P$ | B+ tree |
|---|---|---|
| Non-leaf | At most $P$ children and $P-1$ keys | At most $P$ children and $P-1$ separator keys |
| Leaf | At most $P-1$ keys | At most $L$ key–record-pointer entries |

In a B+ tree, leaf capacity $L$ can differ from $P-1$, because leaf entries and internal entries occupy different amounts of space.

#### B+ Tree Search

1. Start at the root.
2. Find the largest key $K_i$ in the current node satisfying: $K_i \leq K$ ($K$ is the target search key).
3. Follow the appropriate pointer to the next level.
4. Continue until a leaf node is reached.
5. If the target key equals a leaf key $K_i$, follow its record pointer $Pr_i$ to access the record.

Time complexity: $O(\log_P n)$

#### B+ Tree Insertion

Insertion differs for:

1. Leaf nodes
   * If overflow occurs:
     * Split the leaf into two leaf nodes.
     * The first node receives the first part of the values.
     * The second node receives the remaining values.
     * Copy the smallest key of the second node into the parent.
     * Maintain the leaf sibling pointer.
2. Non-leaf nodes
   * If overflow occurs:
     * Split it into two nodes.
     * The first node contains $\left\lceil\frac{P}{2}\right\rceil-1$ keys.
     * Move the smallest key of the remaining part to the parent.
     * The second node contains the remaining keys.

```text
Leaf Split -> Copy separator to parent

Non-Leaf Split -> Move separator to parent
```

```text
Insertion Order: 1, 4, 7, 10, 17, 21, 31, 25, 19, 20, 28, 42
```

![](/images/dbms/bptree-insert-1.png)

![](/images/dbms/bptree-insert-2.png)

#### B+ Tree Deletion

1. Start at the root and find leaf $L$ containing the entry.
2. Remove the entry.
3. If $L$ still contains at least the minimum required number of entries:
   * done
4. If $L$ underflows:
   * try redistribution from an adjacent sibling having the same parent
5. If redistribution fails:
   * merge $L$ with a sibling
6. If a merge occurs:
   * remove the corresponding separator entry from the parent
7. A merge may propagate to the root and decrease the height of the tree.
8. If the deleted entry also appears in an internal node:
   * replace it using its inorder successor.

*Redistribution:*

```text
Sibling
 -> lend entry
 -> deficient leaf
```

*Merge:*

```text
Leaf L + Adjacent Sibling -> Merge

Delete corresponding separator from parent
```

If the parent underflows

```text
Repair parent
 -> Redistribution or Merge
 -> May propagate to root
```

![](/images/dbms/bptree-delete-1.png)

![](/images/dbms/bptree-delete-2.png)
