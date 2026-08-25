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

## Relational Algebra and SQL

## Transactional Control

## File Structure
